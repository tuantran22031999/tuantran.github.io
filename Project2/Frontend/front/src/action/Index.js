import * as type from '../contact/Type'

export const user = (val) =>{

    return {

        type:type.USER,
        val
    }
}