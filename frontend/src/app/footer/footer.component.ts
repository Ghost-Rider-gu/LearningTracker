import { Component } from '@angular/core';
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import {faLinkedin, faSquareGithub, faStackOverflow} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  socialProfiles = [
    { icon: faEnvelope, link: 'mailto:iurii.golubnichenko@gmail.com' },
    { icon: faLinkedin, link: 'https://www.linkedin.com/in/iurii-golubnichenko/' },
    { icon: faSquareGithub, link: 'https://github.com/Ghost-Rider-gu' },
    { icon: faStackOverflow, link: 'https://stackoverflow.com/users/1599177/ghost-rider' }
  ];
}
