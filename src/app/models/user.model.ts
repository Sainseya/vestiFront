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
      type: string,
      color: string,
      size: string,
      favorite: boolean,
      linkImage: string,
      fit:string






    }
  ]
  bottoms: [
    {
      id: string,
      name: string,
      label: string,
      season: string,
      type: string,
      color: string,
      size: string,
      favorite:boolean,
      linkImage: string,
      fit:string


    }
  ]
}
],
events:[
  {
    id:string,
    dateStart: string,
    dateEnd: string,
    description: string,
    outfits: string

  }
]
}
export default IUsers
