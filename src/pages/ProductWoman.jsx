import React, { useEffect } from 'react'
import { getProductBySlug } from '../assets/fake-data/productsWoman'
import ProductView from '../components/ProductView'
import Section from '../components/Section'
const ProductWoman = props => {
    const product = getProductBySlug(props.match.params.slug)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Section> <ProductView product={product} /></Section>
        </div>
    )
}

export default ProductWoman
