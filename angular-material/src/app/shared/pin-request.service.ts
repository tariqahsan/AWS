// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { PinRequest } from './PinRequest';
// import { Observable } from 'rxjs';
// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

// //const baseUrl = 'http://localhost:8686/api/v1/pinRequests';
// const baseUrl = 'http://54.162.72.249:8080/api/v1/pinRequests';

// @Injectable({
//   providedIn: 'root'
// })

// export class PinRequestService {
    
//     //form!: FormGroup;
//     // For MySQL constructor
//     constructor(private http: HttpClient, public formBuilder: FormBuilder) { }
    
//     // ngOnInit() {
//     //   this.form = this.formBuilder.group({
//     //     //firstName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20), Validators.pattern('[a-zA-Z]+')]]
//     //     $key: [null],
//     //     parentOrgName: ['', Validators.required],
//     //     parentCageCode:['', Validators.required],
//     //     divisionName: [''],
//     //     divisionCageCode: [''],
//     //     pointOfContact: this.formBuilder.group({
//     //       lastName: [''],
//     //       firstName: [''],
//     //       phone: ['', Validators.required, Validators.minLength(10)],
//     //       email:['', Validators.required, Validators.email]
//     //     })

//     //   });
  
//     // }
//     form:  FormGroup = new FormGroup({
//       $key: new FormControl(null),
//       parentOrgName: new FormControl('', Validators.required),
//       parentCageCode: new FormControl('', Validators.required),
//       divisionName: new FormControl(''),
//       divisionCageCode: new FormControl(''),
//       replacement: new FormControl(false),
//       poc: new FormGroup({
//         lastName: new FormControl(''),
//         firstName: new FormControl(''),
//         phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
//         email: new FormControl('', [Validators.required, Validators.email])
//       })
//     });

//     initializeFormGroup() {
//       console.log("Reseting form fields");
//         this.form.setValue({
//         $key: null,
//         parentOrgName: '',
//         parentCageCode: '',
//         divisionName: '',
//         divisionCageCode: '',
//         replacement: false,
//         lastName: '',
//         firstName: '',
//         phone: '',
//         email: ''
//       })
//     }
  
//     // For HttpClient CRUD
//     getAll(): Observable<PinRequest[]> {
//       return this.http.get<PinRequest[]>(baseUrl);
//     }
  
//     get(id: any): Observable<PinRequest> {
//       return this.http.get(`${baseUrl}/${id}`);
//     }
  
//     create(data: any): Observable<any> {
//       console.log(`${baseUrl}/add`)
//       console.log(data)
//       return this.http.post(`${baseUrl}/add`, data);
//     }
  
//     update(id: any, data: any): Observable<any> {
//       return this.http.put(`${baseUrl}/${id}`, data);
//     }
  
//     delete(id: any): Observable<any> {
//       return this.http.delete(`${baseUrl}/${id}`);
//     }
  
//     deleteAll(): Observable<any> {
//       return this.http.delete(baseUrl);
//     }
  
//     findByTitle(title: any): Observable<PinRequest[]> {
//       return this.http.get<PinRequest[]>(`${baseUrl}?title=${title}`);
//     }
//   }
   
//   function $keys($keys: any) {
//     throw new Error('Function not implemented.');
//   }
  
// function initializeFormGroup() {
//   throw new Error('Function not implemented.');
// }

// function getAll() {
//   throw new Error('Function not implemented.');
// }

// function get(id: any, any: any) {
//   throw new Error('Function not implemented.');
// }

// function id(id: any, any: any) {
//   throw new Error('Function not implemented.');
// }

// function create(data: any, any: any) {
//   throw new Error('Function not implemented.');
// }

// function data(data: any, any: any) {
//   throw new Error('Function not implemented.');
// }

// function deleteAll() {
//   throw new Error('Function not implemented.');
// }

// function findByTitle(title: any, any: any) {
//   throw new Error('Function not implemented.');
// }

// function title(title: any, any: any) {
//   throw new Error('Function not implemented.');
// }

//

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PinRequest } from './PinRequest';
import { Observable } from 'rxjs';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

//const baseUrl = 'http://localhost:8080/api/v1/pinRequests'; // Need to move this in the environment
const baseUrl = 'http://54.162.72.249:8080/api/v1/pinRequests';
@Injectable({
  providedIn: 'root'
})

export class PinRequestService {
    
    //form!: FormGroup;
    // For MySQL constructor
    constructor(private http: HttpClient, public formBuilder: UntypedFormBuilder) { }
    
    // ngOnInit() {
    //   this.form = this.formBuilder.group({
    //     //firstName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20), Validators.pattern('[a-zA-Z]+')]]
    //     $key: [null],
    //     parentOrgName: ['', Validators.required],
    //     parentCageCode:['', Validators.required],
    //     divisionName: [''],
    //     divisionCageCode: [''],
    //     replacement: new FormControl(false),
    //     responseInd: new FormControl('Y'),
    //     pointOfContact: this.formBuilder.group({
    //       lastName: [''],
    //       firstName: [''],
    //       phone: ['', Validators.required, Validators.minLength(10)],
    //       email:['', Validators.required, Validators.email]
    //     })

    //   });
  
    // }
    form:  UntypedFormGroup = new UntypedFormGroup({
      id: new UntypedFormControl(null),
      parentOrgName: new UntypedFormControl('', Validators.required),
      parentCageCode: new UntypedFormControl('', Validators.required),
      divisionName: new UntypedFormControl(''),
      divisionCageCode: new UntypedFormControl(''),
      replacement: new UntypedFormControl(false),
      responseInd: new UntypedFormControl('Y'),
      createDateTime: new UntypedFormControl(''),
      poc: new UntypedFormGroup({
        id: new UntypedFormControl(null),
        lastName: new UntypedFormControl(''),
        firstName: new UntypedFormControl(''),
        phone: new UntypedFormControl('', [Validators.required, Validators.minLength(10)]),
        email: new UntypedFormControl('', [Validators.required, Validators.email])
      })
    });

    initializeFormGroup() { // Need to re-visit to fix this method. Currently not being used.
      console.log("Reseting form fields");
        this.form.setValue({
        id: null,
        parentOrgName: '',
        parentCageCode: '',
        divisionName: '',
        divisionCageCode: '',
        replacement: false,
        responseInd: 'Y'
        // lastName: '',
        // firstName: '',
        // phone: '',
        // email: ''
      })
    }
  
    // For HttpClient CRUD
    getAll(): Observable<PinRequest[]> {
      return this.http.get<PinRequest[]>(baseUrl);
    }
  
    get(id: any): Observable<PinRequest> {
      return this.http.get(`${baseUrl}/${id}`);
    }
  
    create(data: any): Observable<any> {
      console.log(`${baseUrl}/add`)
      console.log(data)
      return this.http.post(`${baseUrl}/add`, data);
    }
  
    update(id: any, data: any): Observable<any> {
      return this.http.put(`${baseUrl}/${id}`, data);
    }
  
    delete(id: any): Observable<any> {
      return this.http.delete(`${baseUrl}/${id}`);
    }
  
    deleteAll(): Observable<any> {
      return this.http.delete(baseUrl);
    }
  
    findByTitle(title: any): Observable<PinRequest[]> {
      return this.http.get<PinRequest[]>(`${baseUrl}?title=${title}`);
    }

    populateForm(pinRequest: PinRequest) {
      // this.form.setValue(_.omit(pinRequest,'<some-field>')); // Don't think this way we need to lodash omit method
      this.form.setValue(pinRequest);
    }
  }