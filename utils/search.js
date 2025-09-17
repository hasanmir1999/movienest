export default function search(list , id){
    if(list.find(item => item.id == id)) return true
    return false
}