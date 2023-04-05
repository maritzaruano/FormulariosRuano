import { Component } from '@angular/core';
import { FormGroup , FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  mascotaForm : FormGroup;

  constructor(private fb : FormBuilder){
    this.mascotaForm = this.fb.group({
      nombre : ['', [Validators.required , Validators.minLength(6) , Validators.maxLength(50) ]],
      apellido : ['', [Validators.required , Validators.minLength(6) , Validators.maxLength(50)]],
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required , Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]],
      NombreMascota : ['', [Validators.required, Validators.minLength(6) , Validators.maxLength(20) ]],
      genero : ['', Validators.required],
      direccionCasa : ['', Validators.required],
      direcionOficina : [''],
      ciudad : ['', Validators.required],
      telefono : ['', [Validators.required, Validators.min(1) , Validators.max(9999999)]],

    })
  }

  // get apellidoControl(): AbstractControl | null{
  //   return this.mascotaForm.get('apellido');
  // }

  // get apellidoControlIsInvalid(): boolean{
  //   return !!(this.apellidoControl?.invalid && this.apellidoControl.touched);
  // }
  
  // get nombreControl(): AbstractControl | null{
  //   return this.mascotaForm.get('nombre');
  // }

  // get nombreControlIsInvalid(): boolean{
  //   return !!(this.nombreControl?.invalid && this.nombreControl.touched);
  // }
  onSubmit(): void{
    if(this.mascotaForm.valid){
      console.log(this.mascotaForm.value);
    }
    else{
      alert('El formulario no es valido');
    }
  }

}



