export class Hopital {
  id: number
  nom: string
  adresse: string
  codepostal: string
  tel1: string
  tel2: string
}

export class Expert {
    nom: string
    prenom: string
    tel1: string
    lieu: string
    type: string
}

export class TypeExpert {
  id: number
  value:string
}

export class ExpertSearch {
    nom: string
    prenom: string
    tel1: string
    lieu:string
    type:string
    nom2: string
    prenom2: string
    tel12: string
    lieu2:string
    type2:string
    nom3: string
    prenom3: string
    tel13: string
    lieu3:string
    type3:string
}

export const DATA_TYPE_EXPERT: TypeExpert[] = [
  {id: 1, value: 'Psychologue'},
  {id: 2, value: 'Psychiatre'},
  {id: 3, value: 'Psycho-Criminologue'}
]

export class Day {
  id:number
  value: string
}

export const DATA_DAYS_WEEK: Day[] = [
  {id: 1, value: 'Lundi'},
  {id: 2, value: 'Mardi'},
  {id: 3, value: 'Mercredi'},
  {id: 4, value: 'Jeudi'},
  {id: 5, value: 'Vendredi'},
  {id: 6, value: 'Samedi'},
  {id: 7, value: 'Dimanche'}
]

