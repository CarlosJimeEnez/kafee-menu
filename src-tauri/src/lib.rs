// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
use chrono::{DateTime, Utc};
use dotenv::dotenv;
use rand::Rng;
use reqwest::header::{HeaderMap, HeaderValue, AUTHORIZATION};
use serde::{Deserialize, Serialize};
use serde_json::json;
use std::env;

#[derive(Debug, Serialize, Deserialize)]
struct User {
    id: i32,
    created_at: DateTime<Utc>,
    Nombre: String,
    Invitado: bool,
}

// Dto
#[derive(Debug, Serialize, Deserialize)]
struct OrderRequest {
    id_user: i32,
    id_producto: i32,
    size: String,
    message: String,
}

fn generate_random_user() -> User {
    let names = vec!["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace"];
    let mut rng = rand::thread_rng();
    let random_id = rng.gen_range(1..1000);
    let random_name = names[rng.gen_range(0..names.len())].to_string();

    User {
        id: random_id,
        created_at: Utc::now(),
        Nombre: random_name,
        Invitado: true,
    }
}

#[tauri::command]
async fn insert_orden(request: OrderRequest) -> Result<String, String> {
    println!("Message: {}", request.message);
    println!("Order id_producto: {:?}", request.id_producto);
    println!("Order id_user: {:?}", request.id_user);
    println!("Order size: {:?}", request.size);

    dotenv().ok();
    let supabase_url = env::var("SUPABASE_URL").expect("SUPABASE_URL must be set");
    let supabase_key = env::var("SUPABASE_API").expect("SUPABASE_KEY must be set");

    ///Comprobar si el usuario ya existe
    let client = reqwest::Client::new();
    let mut headers = HeaderMap::new();
    headers.insert("apikey", HeaderValue::from_str(&supabase_key).unwrap());
    headers.insert(
        AUTHORIZATION,
        HeaderValue::from_str(&format!("Bearer {}", supabase_key)).unwrap(),
    );

    let response = client
        .get(format!(
            "{}/rest/v1/Usuarios?id=eq.{}",
            supabase_url, request.id_user
        ))
        .headers(headers)
        .send()
        .await
        .map_err(|e| e.to_string())?;

    let users: Vec<User> = response.json().await.map_err(|e| e.to_string())?;

    if users.is_empty() {
        println!("User not found with id: {}", request.id_user);
    } else {
        println!("User found: {:?}", users[0]);
    }

    //Comprobar el tamaño de la orden

    Ok("Order received successfully".to_string())
}

#[tauri::command]
async fn invitado_login() -> Result<User, String> {
    let user: User = generate_random_user();

    dotenv().ok();
    let supabase_url = env::var("SUPABASE_URL").expect("SUPABASE_URL must be set");
    let supabase_key = env::var("SUPABASE_API").expect("SUPABASE_KEY must be set");

    let client = reqwest::Client::new();
    let mut headers = HeaderMap::new();
    headers.insert("apikey", HeaderValue::from_str(&supabase_key).unwrap());
    headers.insert(
        AUTHORIZATION,
        HeaderValue::from_str(&format!("Bearer {}", supabase_key)).unwrap(),
    );

    let user_data = json!({
        "Nombre": user.Nombre,
        "created_at": user.created_at,
        "Invitado": user.Invitado
    });
    println!("Usuario generado: {:?}", user_data);

    let response = client
        .post(format!("{}/rest/v1/Usuarios", supabase_url))
        .headers(headers)
        .json(&user_data)
        .send()
        .await
        .map_err(|e| e.to_string())?;

    if response.status().is_success() {
        println!("User inserted successfully: {:?}", user);
        Ok(user)
    } else {
        Err(format!("Error inserting user: {}", response.status()))
    }
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![insert_orden, invitado_login])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
