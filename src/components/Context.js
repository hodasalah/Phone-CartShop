import React, { Component } from 'react';
import {storeProducts , detailProduct} from '../data';
const ProductContext = React.createContext();
//Provider --> wrap our app in it look at indexJs
//consumer --> wrap compo need state 
class ContextProvider extends Component {
    state={
        products:[],
        detailProduct:detailProduct,
        cart:[] ,
        modalOpen:false,
				modalProduct:{},
				cartSubTotal:0,
				cartTax:0,
				cartTotal:0
    }
    componentDidMount(){
        this.setProducts();
    }
    setProducts=()=>{
        let newProducts = [];
        storeProducts.forEach(item=>{
            let singleItem={...item};
            newProducts = [...newProducts , singleItem]
        });
        return this.setState({products:newProducts})
    }
    getItem=(id)=>{
        const product = this.state.products.find(item=>{
            return item.id === id
        });
        return product;
    }
    handelDetail=(id)=>{
        const product=this.getItem(id);
        this.setState(()=> {
            return{detailProduct:product}
        });
    }
    addToCart=(id)=>{
        let newCartProducts = [...this.state.products];
        let index = newCartProducts.indexOf(this.getItem(id))
        let newProduct = newCartProducts[index];
        newProduct.inCart =true;
        newProduct.count = 1;
        newProduct.total = newProduct.price * newProduct.count
        this.openModal(id);
				this.setState(()=>{
					return{
						products:newCartProducts, 
						detailProduct: newProduct ,
						cart:[...this.state.cart , newProduct ],
						modalProduct:newProduct
					}
				} , ()=>{this.addTotals()}
				)
				
    }
    openModal = (id) =>{
        const productModal = this.getItem(id);
        this.setState(()=>{
            return{modalProduct:productModal,modalOpen:true}
        })
    }
    closeModal=()=>{
        this.setState(()=>{
            return{modalOpen:false}
        })
		}
		increment=(id)=>{
			let cartCopy= [...this.state.cart];
			let index= cartCopy.indexOf(this.getItem(id));
			let cartItem =cartCopy[index];
			let prevCount = cartItem.count
			let newCount =prevCount + 1
			cartItem.count = newCount;
			
			cartItem.total = cartItem.price * newCount
			this.setState(()=>{
				return{cart:cartCopy}
			} , ()=>this.addTotals())
		}
		decrement=(id)=>{
			let cartCopy= [...this.state.cart];
			let index= cartCopy.indexOf(this.getItem(id));
			let cartItem =cartCopy[index];
			let prevCount = cartItem.count
			
			let newCount =prevCount - 1
			cartItem.count = newCount;
			if(newCount === 0){
				return this.removeItem(id)
			}else{
				cartItem.total = cartItem.price * newCount
			}
			
			this.setState(()=>{
				return{cart:cartCopy}
			},()=>this.addTotals())	
		}
		removeItem=(id)=>{
			const cartfilter= [...this.state.cart].filter(item=>{
				return item.id !== id
			},[]);
			let productsCopy = [...this.state.products];
			let index = productsCopy.indexOf(this.getItem(id));
			let productRemoved = productsCopy[index];
			productRemoved.inCart = false;
			productRemoved.count =0;
			productRemoved.total =0;
			this.setState(()=>{
				return{cart:cartfilter,products:productsCopy}
			},()=>this.addTotals())
		}
		clearCart=()=>{
			this.setState(()=>{
				return{
					cart:[]
				}
			},()=>this.setProducts())
		}
		addTotals=()=>{
			let itemsTotal = 0;
			let cartCopy = [...this.state.cart]
			cartCopy.map(item=>{
				return itemsTotal += item.total
			})
			const tax = Number((itemsTotal * 0.1).toFixed(2));
			const allTotal = itemsTotal + tax
			this.setState({
				cartTax:tax,
				cartSubTotal:itemsTotal,
				cartTotal:allTotal
			})
		}
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handelDetail:this.handelDetail,
                addToCart:this.addToCart,
                openModal:this.openModal,
                closeModal:this.closeModal,
								increment:this.increment,
								decrement:this.decrement,
								removeItem:this.removeItem,
								clearCart:this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}
const ContextConsumer= ProductContext.Consumer;
export {ContextProvider , ContextConsumer}
