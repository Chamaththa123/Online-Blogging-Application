import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addarticle',
  standalone: true,
  imports: [],
  templateUrl: './addarticle.component.html',
  styleUrl: './addarticle.component.css'
})
export class AddarticleComponent {

  StudentArray : any[] = [];
  currentStudentID = "";

  autherName: string ="";
  header: string ="";
  description: string ="";
  
  constructor(private http: HttpClient ) 
  {
    this.getAllStudent();
  }
  getAllStudent() {
    this.http.get("http://localhost:5000/students")
    .subscribe((resultData: any)=>
    {
       
        console.log(resultData);
        this.StudentArray = resultData;
    });
  }
  // setUpdate(data: any) 
  // {
  //  this.autherName = data.name;
  //  this.header = data.address;
  //  this.description = data.phone;
  //  this.currentStudentID = data._id;
  
  // }
  // UpdateRecords()
  // {
  //   let bodyData = {
  //     "autherName" : this.autherName,
  //     "header" : this.header,
  //     "description" : this.description,
  //   };
    
  //   this.http.patch("http://localhost:5000/students"+ "/"+this.currentStudentID,bodyData).subscribe((resultData: any)=>
  //   {
  //       console.log(resultData);
  //       alert("Student Updateddd")
  //       this.getAllStudent();
      
  //   });
  // }
  
  // setDelete(data: any) {
  //   this.http.delete("http://localhost:5000/students"+ "/"+ data._id).subscribe((resultData: any)=>
  //   {
  //       console.log(resultData);
  //       alert("Student Deletedddd")
  //       this.getAllStudent();
   
  //   });
  //   }
    
  save()
  {
    if(this.currentStudentID == '')
    {
        this.register();
    }
      // else
      // {
      //  this.UpdateRecords();
      // }       
  }
register()
  {
    let bodyData = {
      "autherName" : this.autherName,
      "header" : this.header,
      "description" : this.description, 
  };
    this.http.post("http://localhost:5000/student/create",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student Registered Successfully")
        //  this.getAllEmployee();
        this.autherName = '';
        this.header = '';
        this.description  = '';
        this.getAllStudent();
    });
  }
  
}
