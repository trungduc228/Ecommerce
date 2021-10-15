import { createSlice } from "@reduxjs/toolkit";

const item = localStorage.getItem('cartItem') !== null ? JSON.parse(localStorage.getItem('cartItem')) : []
const initialState = {
    value: item
}
const cartITemSlice = createSlice({
    name: 'cartItem',
    initialState,
    reducers: {
        add: (state, action) => {
            const newItem = action.payload

            const duplicate = state.value.filter(e => e.slug === newItem.slug && e.color === newItem.color && e.size === newItem.size)

            if (duplicate.length > 0) {
                state.value = state.value.filter(e => e.slug !== newItem.slug || e.color !== newItem.color || e.size !== newItem.size)
                state.value = [...state.value, {
                    id: duplicate[0].id,
                    slug: newItem.slug,
                    color: newItem.color,
                    size: newItem.size,
                    price: newItem.price,
                    quantity: newItem.quantity + duplicate[0].quantity,
                    image: newItem.image,
                    title: newItem.title
                }]
            }
            else {
                state.value = [...state.value, {
                    ...action.payload,
                    id: state.value.length > 0 ? state.value[state.value.length - 1].id + 1 : 1
                }]
            }
            localStorage.setItem('cartItem', JSON.stringify(state.value.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0))))

        },
        update: (state, action) => {
            const newItem = action.payload
            const duplicate = state.value.filter(e => e.slug === newItem.slug && e.color === newItem.color && e.size === newItem.size)
            if (duplicate.length > 0) {
                state.value = state.value.filter(e => e.slug !== newItem.slug || e.color !== newItem.color || e.size !== newItem.size)
                state.value = [...state.value, {
                    id: duplicate[0].id,
                    slug: newItem.slug,
                    color: newItem.color,
                    size: newItem.size,
                    price: newItem.price,
                    quantity: newItem.quantity,
                    image: newItem.image,
                    title: newItem.title
                }]
            }
            localStorage.setItem('cartItem', JSON.stringify(state.value.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0))))
        },
        remove: (state, action) => {
            const newItem = action.payload
            state.value = state.value.filter(e => e.slug !== newItem.slug || e.color !== newItem.color || e.size !== newItem.size)
            localStorage.setItem('cartItem', JSON.stringify(state.value.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0))))
        }

    }
})

export const { add, update, remove } = cartITemSlice.actions

export default cartITemSlice.reducer