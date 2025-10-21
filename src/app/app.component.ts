import { CommonModule } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Gautamsugar';
   showScrollTop = signal(false);
  mobileMenuOpen = signal(false);
  activeSection = signal('home');

  contactForm = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  products = [
    {
      title: 'White Refined Sugar',
      description: 'Premium quality refined sugar for all your needs',
      icon: '🍚'
    },
    {
      title: 'Raw Sugar',
      description: 'Natural unrefined sugar with rich nutrients',
      icon: '🌾'
    },
    {
      title: 'Brown Sugar',
      description: 'Organic brown sugar with natural molasses',
      icon: '🍂'
    },
    {
      title: 'Sugar Cubes',
      description: 'Perfectly shaped sugar cubes for beverages',
      icon: '📦'
    }
  ];

  services = [
    {
      title: 'Sugar Industry News',
      description: 'Stay updated with the newest developments and trends in the sugar market.',
      icon: 'news'
    },
    {
      title: 'Buy and Sell Sugar',
      description: 'Explore opportunities and transactions in sugar trading, ensuring seamless transactions.',
      icon: 'trade'
    },
    {
      title: 'Research & Analytics',
      description: 'Insights and data-driven analysis to optimize agricultural practices for sugar production.',
      icon: 'research'
    },
    {
      title: 'Bioenergy News',
      description: 'Discover advancements and news in bioenergy derived from sugar-based sources.',
      icon: 'energy'
    }
  ];

  stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '500+', label: 'Happy Clients' },
    { value: '1000+', label: 'Tons Traded' },
    { value: '15+', label: 'States Covered' }
  ];

  contactDetails = [
    {
      icon: '📍',
      title: 'Address',
      content: ['4/410, COMMERCIAL COMPLEX, ELIXA PARK, NEAR STAR BAZAR, KOLHAPUR - 416001']
    },
    {
      icon: '📞',
      title: 'Phone',
      content: ['+91-9371100957']
    },
    {
      icon: '✉️',
      title: 'Email',
      content: ['info@gautamsugar.com']
    },
    {
      icon: '⏰',
      title: 'Working Hours',
      content: ['Mon - Sat: 10:00 AM - 7:00 PM', 'Sunday Closed']
    }
  ];

  socialLinks = [
    { name: 'Facebook', icon: '/img/facebook.svg', url: '#' },
    { name: 'Youtube', icon: 'img/youtube.svg', url: '#' },
    { name: 'LinkedIn', icon: 'img/linkedin.svg', url: '#' },
    { name: 'Instagram', icon: 'img/instagram.svg', url: '#' }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollTop.set(window.scrollY > 300);
    this.updateActiveSection();
  }

  updateActiveSection() {
    const sections = ['home', 'about', 'products', 'services', 'contact'];
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          this.activeSection.set(section);
          break;
        }
      }
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.mobileMenuOpen.set(false);
    }
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.update((value: any) => !value);
  }

  onSubmit() {
    console.log('Form submitted:', this.contactForm);
    alert('Thank you for contacting us! We will get back to you soon.');
    this.contactForm = { name: '', email: '', phone: '', message: '' };
  }
}
