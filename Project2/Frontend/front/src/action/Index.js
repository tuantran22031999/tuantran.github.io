import * as type from '../contact/Type'

export const user = (val) =>{

    return {

        type:type.USER,
        val
    }
}

export const check = (val) =>{

    return {

        type:type.CHECK,
        val
    }
}

export const check1 = (val) =>{

    return {

        type:type.CHECK1,
        val
    }
}