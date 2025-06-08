// src/
// └── app/
//     ├── message-form/
//     │   ├── message-form.component.ts
//     │   ├── message-form.component.html
//     │   ├── message-form.component.css
//     │   └── message-form.component.spec.ts
//     ├── message-list/
//     │   ├── message-list.component.ts
//     │   ├── message-list.component.html
//     │   ├── message-list.component.css
//     │   └── message-list.component.spec.ts
//     ├── message-item/
//     │   ├── message-item.component.ts
//     │   ├── message-item.component.html
//     │   ├── message-item.component.css
//     │   └── message-item.component.spec.ts
//     ├── app.component.ts
//     ├── app.component.html
//     ├── app.component.css
//     └── app.module.ts

// -----------------------------
// app.component.html
// -----------------------------
<div class="container">
  <h1 class="title">MY SMS MESSENGER</h1>
  <div class="grid">
    <app-message-composer></app-message-composer>
    <app-message-history></app-message-history>
  </div>
</div>

// -----------------------------
// app.component.css (or global styles.css)
// -----------------------------
.container {
  text-align: center;
  padding: 2rem;
}

.title {
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 2rem;
}

.grid {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}

// -----------------------------
// Summary of Components
// -----------------------------

// message-composer.component.ts
// - Has a reactive form
// - Emits message data on submit

// message-history.component.ts
// - Fetches message list from a MessageService
// - Displays scrollable list of messages

// message.service.ts
// - Handles HTTP requests to send and retrieve messages from the backend
