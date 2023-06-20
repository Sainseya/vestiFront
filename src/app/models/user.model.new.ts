interface IUsers {
  userId: string,
  name: string,
  surname: string,
  pseudo: string,
  email: string,
  gender: string,
  accountType: string,
  wardrobes: [
    {
     id: string,
     name: string,
    items: [
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
