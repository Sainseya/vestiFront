interface IUsers {
  id: string,
  name: string,
  surname: string,
  pseudo: string,
  email: string,
  gender: string,
  accountType: string,
  wardrobes: [
    {

    tops: [
    {
      id: string,
      name: string,
      label: string,
      season: string,
      linkImage: string,
      favorite: boolean,
      type: string,
      color: string,
      size: string,
      fit:string


    }
  ]
  bottoms: [
    {
      id: string,
      name: string,
      label: string,
      season: string,
      linkImage: string,
      favorite: boolean,
      type: string,
      color: string,
      size: string,
      fit:string


    }
  ]
}
],
events:[
  {
    id:string,
    dateStart: Date,
    dateEnd: Date,
    description: string,
    outfit: string

  }
]
}
export default IUsers
