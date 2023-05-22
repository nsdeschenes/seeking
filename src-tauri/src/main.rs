#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use std::sync::Arc;

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}

#[tauri::command]
fn cause_panic() {
    panic!("Hello, world!");
}

fn main() {
    let _guard = sentry::init((
        "",
        sentry::ClientOptions {
            release: sentry::release_name!(),
            traces_sample_rate: 0.2,
            enable_profiling: true,
            profiles_sample_rate: 0.2,
            before_send: Some(Arc::new(|mut event| {
                event.user.as_mut().unwrap().ip_address = None;
                event.user.as_mut().unwrap().email = None;
                event.user.as_mut().unwrap().username = None;

                return Some(event);
            })),
            ..Default::default()
        },
    ));

    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, cause_panic])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
