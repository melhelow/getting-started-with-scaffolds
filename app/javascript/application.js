import "@hotwired/turbo-rails"

// Remove this line disabling Turbo drive:
// Turbo.session.drive = false

import jquery from "jquery";
window.jQuery = jquery;
window.$ = jquery;

import Rails from "@rails/ujs"
Rails.start();
