#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}

#[tauri::command]
fn cause_panic() {
    panic!("Hello, world!");
}

fn main() {
    let _guard = sentry::init(("", sentry::ClientOptions {
        release: sentry::release_name!(),
        
        traces_sample_rate: 0.2,
        enable_profiling: true,
        profiles_sample_rate: 0.2,
        ..Default::default()
    }));

    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, cause_panic])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
