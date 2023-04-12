import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { RandomModule } from './app/app.module';
import { MyCustomModule } from './app/MyCustomModule';

// import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(MyCustomModule)
  .catch((err) => console.error(err)); // Initializing or Starting 

  // When we Run npm start or ng s -o , this is the First File Triggers or Start .. 
  // Starting or Bootstrapping 


  // 1. Create A project 
  // 2. Create A Module with Your name 
  // 3. Create A Component with YourName
  // 4. Add Component in Module 
  // 5. Add that Module in main.ts 