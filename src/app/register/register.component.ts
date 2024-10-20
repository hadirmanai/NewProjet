import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { AProposComponent } from '../a-propos/a-propos.component';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VideoPubliciteServiceComponent } from '../video-publicite-service/video-publicite-service.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isPopupOpen1 = false; // State for the first image popup
  isPopupOpen2 = false; // State for other images popup
  currentPage: number = 1;
  totalPages: number;
  imagesPerPage: number = 3; // Number of images to show on each page (mobile)
  isMobile: boolean = false;

  // Array of all images to be displayed
  allImages = [
    { src: '/assets/Image/home.png', alt: 'Home Icon' },
    { src: '/assets/Image/home1.png', alt: 'Home Icon 1' },
    { src: '/assets/Image/ulimitedB.png', alt: 'Unlimited Icon' },
    { src: '/assets/Image/home3.png', alt: 'Home Icon 3' },
    { src: '/assets/Image/serviceF 1.png', alt: 'Service F Icon' },
    { src: '/assets/Image/serviceB.png', alt: 'Service B Icon' },
    { src: '/assets/Image/c.png', alt: 'C Icon' },
    { src: '/assets/Image/ServiceR.png', alt: 'Service R Icon' },
    { src: '/assets/Image/serviceJ.png', alt: 'Service J Icon' },
    { src: '/assets/Image/appel.png', alt: 'Appel Icon' },
    { src: '/assets/Image/ch.png', alt: 'CH Icon' },
    { src: '/assets/Image/Joker.png', alt: 'Joker Icon' },
    { src: '/assets/Image/B.png', alt: 'B Icon' },
    { src: '/assets/Image/R.png', alt: 'R Icon' },
    { src: '/assets/Image/X.png', alt: 'X Icon' }
  ];

  // Handle image clicks
  handleImageClick(image: { src: string; alt: string }) {
    if (image.alt === 'Home Icon') {
      // First image - navigate to another page
      this.router.navigate(['/login']);
    } else if (image.alt === 'Home Icon 1') {
      this.isPopupOpen1 = true; // Open popup for the second image
      this.openDialog();
    } else if(image.alt === 'Unlimited Icon'){
      this.isPopupOpen2 = true; // Open popup for other images
      this.openVideo();
    }
  }

  // Handle screen resize to detect mobile
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.detectMobile();
  }

  // Detect if the current screen is mobile size
  detectMobile() {
    this.isMobile = window.innerWidth <= 941; // Adjust as needed for mobile width
    if (!this.isMobile) {
      this.currentPage = 1; // Reset to first page when switching to desktop
    }
  }

  // Navigate to the previous page
  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  // Navigate to the next page
  goToNextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  // Get the images to display based on the current page
  getImagesToDisplay() {
    if (this.isMobile) {
      const startIndex = (this.currentPage - 1) * this.imagesPerPage;
      return this.allImages.slice(startIndex, startIndex + this.imagesPerPage);
    } else {
      return this.allImages; // Display all images on desktop
    }
  }

  // Placeholder function for opening an image action
  openImage(image) {
    console.log('Opening image:', image);
  }
  phoneForm: FormGroup;

  constructor(private fb: FormBuilder, private dialogRef: MatDialog, private router: Router) {
    this.phoneForm = this.fb.group({
      phone: ['', [Validators.required]]
    });
    this.totalPages = Math.ceil(this.allImages.length / this.imagesPerPage);
    this.detectMobile();
  }


  onSubmit() {
    console.log(this.phoneForm.value);
  }
  openVideo() {
    this.dialogRef.open(VideoPubliciteServiceComponent, {
      data: {
        name: 'Samuel'
      },
     
    });
    
  }
  private listTitles: any[];
  location: Location;
    mobile_menu_visible: any = 0;
  private toggleButton: any;
  private sidebarVisible: boolean;

  public isCollapsed = true;


ngOnInit(): void {
}
title = 'swiper-demo';
onSwiper([swiper]) {
  console.log(swiper);
}
onSlideChange() {
  console.log('slide change');
}
sidebarOpen() {
  const toggleButton = this.toggleButton;
  const mainPanel =  <HTMLElement>document.getElementsByClassName('main-panel')[0];
  const html = document.getElementsByTagName('html')[0];
  if (window.innerWidth < 991) {
    mainPanel.style.position = 'fixed';
  }

  setTimeout(function(){
      toggleButton.classList.add('toggled');
  }, 500);

  html.classList.add('nav-open');

  this.sidebarVisible = true;
};
sidebarClose() {
  const html = document.getElementsByTagName('html')[0];
  this.toggleButton.classList.remove('toggled');
  const mainPanel =  <HTMLElement>document.getElementsByClassName('main-panel')[0];

  if (window.innerWidth < 991) {
    setTimeout(function(){
      mainPanel.style.position = '';
    }, 500);
  }
  this.sidebarVisible = false;
  html.classList.remove('nav-open');
};
sidebarToggle() {
  // const toggleButton = this.toggleButton;
  // const html = document.getElementsByTagName('html')[0];
  var $toggle = document.getElementsByClassName('navbar-toggler')[0];

  if (this.sidebarVisible === false) {
      this.sidebarOpen();
  } else {
      this.sidebarClose();
  }
  const html = document.getElementsByTagName('html')[0];

  if (this.mobile_menu_visible == 1) {
      // $('html').removeClass('nav-open');
      html.classList.remove('nav-open');
      if ($layer) {
          $layer.remove();
      }
      setTimeout(function() {
          $toggle.classList.remove('toggled');
      }, 400);

      this.mobile_menu_visible = 0;
  } else {
      setTimeout(function() {
          $toggle.classList.add('toggled');
      }, 430);

      var $layer = document.createElement('div');
      $layer.setAttribute('class', 'close-layer');


      if (html.querySelectorAll('.main-panel')) {
          document.getElementsByClassName('main-panel')[0].appendChild($layer);
      }else if (html.classList.contains('off-canvas-sidebar')) {
          document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
      }

      setTimeout(function() {
          $layer.classList.add('visible');
      }, 100);

      $layer.onclick = function() { //asign a function
        html.classList.remove('nav-open');
        this.mobile_menu_visible = 0;
        $layer.classList.remove('visible');
        setTimeout(function() {
            $layer.remove();
            $toggle.classList.remove('toggled');
        }, 400);
      }.bind(this);

      html.classList.add('nav-open');
      this.mobile_menu_visible = 1;

  }
};
collapse(){
this.isCollapsed = !this.isCollapsed;
const navbar = document.getElementsByTagName('nav')[0];
console.log(navbar);
if (!this.isCollapsed) {
  navbar.classList.remove('navbar-transparent');
  navbar.classList.add('bg-white');
}else{
  navbar.classList.add('navbar-transparent');
  navbar.classList.remove('bg-white');
}

}


openDialog() {
  this.dialogRef.open(AProposComponent, {
    data: {
      name: 'Samuel'
    },
    width: '400px', // Largeur personnalisée
    height: '450px' // Hauteur personnalisée
  });
}

}


function intlTelInput(input: HTMLInputElement, arg1: {
  initialCountry: string; // Par défaut, Tunisie
  preferredCountries: string[]; // Pays favoris
  utilsScript: string; // Charge le script utils pour la validation
}) {
  throw new Error('Function not implemented.');
}

