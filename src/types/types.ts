export enum SelectedPage {
    Home = "home",
    Benefits = "benefits",
    OurClases = "ourclases",
    ContactUs = "contactus"
  }

  export interface BenefitType {
    icon: JSX.Element,
    title: string,
    discription: string 
  }

  export interface ClassType {
    name: string,
    description?: string,
    image: string
  }