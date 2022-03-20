export class Person{
  name?:String;
  birthDate?:String;
  location?:String;
  gender?:String;
  deathDate?:String;
  birthCity?:String;
  currentCity?:String;
  phone?:String;
  job?:String;
  pic?:String
  father?:Person;
  mother?:Person;
  children?:Person[];
  constructor(){
    this.name = "لا يوجد بيانات";
    this.birthDate = "لا يوجد بيانات";
    this.location = "لا يوجد بيانات";
    this.gender = "لا يوجد بيانات";
    this.deathDate = "لا يوجد بيانات";
    this.currentCity = "لا يوجد بيانات";
    this.phone = "لا يوجد بيانات";
    this.job = "لا يوجد بيانات";
    this.pic = "/asstes/male.png";
  }
}
