import React from 'react'
import {View,Text,FlatList} from 'react-native'
import ShoppingItem from './ShoppingItem';

const dataSource=[
{
 key:1,
 Name:"Dress Blue",
 Description:"Fancy nice looking Dress ",
 PhotoURL:"https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi1wNeHg-HeAhWC_KQKHSpCA8AQjRx6BAgBEAU&url=http%3A%2F%2Ftamunsadelen.blogspot.com%2F2016%2F01%2Fblue-dress.html&psig=AOvVaw1UIv8fGx3VmkI21tLtYHy2&ust=1542736388820465"
},
{
    key:2,
    Name:"shoes",
    Description:"Fancy nice looking shoes ",
    PhotoURL:"https://media03.toms.com/static/www/images/product/MENS/ATG/SIDE/10011588-GreyLinenMensPreston-P-1450x1015.jpg"
   },
   {
    key:3,
    Name:"hat",
    Description:"Fancy nice looking hat ",
    PhotoURL:"http://www.stachastyles.com/wp-content/uploads/2018/03/spring-hats-1.jpg"
   },
   {
    key:4,
    Name:"Jacket",
    Description:"Fancy nice looking Jacket",
    PhotoURL:"https://www.jcrew.com/s7-img-facade/B1552_GR7173"
   },


]
export default class ShoppingItemsList extends React.Component{

render(){

    return(
        <FlatList 
        data={dataSource}
        renderItem={({item})=>{
        return(
            <ShoppingItem navigation={this.props.navigation} Item={item} />
        )
        }} 
        ></FlatList>
    )
}

}