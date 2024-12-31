import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Gruas.landscape';

  ngAfterViewInit(): void {
    const messageElement = document.querySelector('.chat-message') as HTMLElement;
    const message = '¿En qué podemos ayudarte?';
    let index = 0;

    const typeWriter = () => {
      if (index < message.length) {
        messageElement.textContent += message.charAt(index);
        index++;
        setTimeout(typeWriter, 100); // Controla la velocidad de escritura
      }
    };

    typeWriter();
  }
}
