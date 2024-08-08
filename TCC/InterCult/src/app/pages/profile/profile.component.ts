import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  @ViewChild('fileInput') fileInput!: ElementRef;
  profileImgSrc: string = 'https://via.placeholder.com/150';
  name: string = '';
  email: string = '';

  triggerFileInput(): void {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target?.result) {
          this.profileImgSrc = e.target.result as string;
        }
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  saveChanges(): void {
    // Implement the logic to save changes
    console.log('Profile updated:', { name: this.name, email: this.email, profileImgSrc: this.profileImgSrc });
  }
}
