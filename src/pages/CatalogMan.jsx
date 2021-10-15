import React, { useState, useRef, useCallback, useEffect } from 'react'
import productsman from '../assets/fake-data/productsman'
import Grid from '../components/Grid'
import ProductCardMan from '../components/ProductCardMan'
import Section from '../components/Section'
import categoryMan from './../assets/fake-data/categoryMan'
import colorsMan from './../assets/fake-data/product-color-man'
import sizesMan from '../assets/fake-data/product-size-man'
import Checkbox from '../components/Checkbox'

const CatalogMan = () => {
    const initFilter = {
        category: [],
        colors: [],
        sizes: []
    }
    const productList = productsman
    const [filter, setFilter] = useState(initFilter)
    const [products, setProducts] = useState(productList)
    const filterSelect = (type, checked, item) => {
        if (checked) {
            switch (type) {
                case "CATEGORY":
                    setFilter({ ...filter, category: [...filter.category, item.categorySlug] })
                    break
                case "COLOR":
                    setFilter({ ...filter, colors: [...filter.colors, item.color] })
                    break
                case "SIZE":
                    setFilter({ ...filter, sizes: [...filter.sizes, item.size] })
                    break
            }
        }
        else {
            switch (type) {
                case "CATEGORY":
                    const newCategory = filter.category.filter(e => e !== item.categorySlug)
                    setFilter({ ...filter, category: newCategory })
                    break
                case "COLOR":
                    const newColor = filter.colors.filter(e => e !== item.color)
                    setFilter({ ...filter, colors: newColor })
                    break
                case "SIZE":
                    const newSize = filter.sizes.filter(e => e !== item.size)
                    setFilter({ ...filter, sizes: newSize })
                    break
            }
        }
    }

    const updateProduct = useCallback(() => {
        let temp = productList
        if (filter.category.length > 0) {
            temp = temp.filter(e => filter.category.includes(e.categorySlug))
        }
        if (filter.colors.length > 0) {
            temp = temp.filter(e => {
                const check = e.colors.find(e => filter.colors.includes(e))
                return check !== undefined
            })
        }
        if (filter.sizes.length > 0) {
            temp = temp.filter(e => {
                const check = e.sizes.find(e => filter.sizes.includes(e))
                return check !== undefined
            })
        }
        setProducts(temp)
    }, [filter, productList])
    useEffect(() => {
        updateProduct()
    }, [updateProduct])
    const onChange = e => {
        var value = e.target.value
        if (value) {
            let temp = products
            temp = temp.filter(e =>
                e.title.toLowerCase().indexOf(value) !== -1
            )
            setProducts(temp)
        }
        else {
            setProducts(productList)
        }
    }
    const onChangeSort = (e) => {
        var product1 = productsman
        product1 = product1.sort((a, b) => (
            e.target.value === "desc" ? b.price - a.price : a.price - b.price
        ))

        setProducts(product1)
    }
    const clearFilter = () => {
        setFilter(initFilter)
    }
    const filterRef = useRef(null);
    const onFilter = () => filterRef.current.classList.toggle('active')
    useEffect(() => {
        window.scrollTo(0, 0)

    }, [])
    return (
        <Section>
            <div className="catalogMan">
                <div className="catalogMan__filter" ref={filterRef}>
                    <div className="catalogMan__filter__narrow" onClick={onFilter}> <i class='bx bx-left-arrow-alt'></i></div>
                    <div className="catalogMman__fitler__widget">
                        <div className="catalogMan__filter__widget__title">
                            Danh mục sản phẩm
                        </div>
                        <div className="catalogMan__filter__widget__content">
                            {
                                categoryMan.map((item, index) => (
                                    <div key={index} className="catalogMan__filter__widget__content__item">
                                        <Checkbox label={item.display} onChange={(input) => filterSelect("CATEGORY", input.checked, item)} checked={filter.category.includes(item.categorySlug)} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="catalogMman__fitler__widget">
                        <div className="catalogMan__filter__widget__title">
                            Màu sắc
                        </div>
                        <div className="catalogMan__filter__widget__content">
                            {
                                colorsMan.map((item, index) => (
                                    <div key={index} className="catalogMan__filter__widget__content__item">
                                        <Checkbox label={item.display} onChange={(input) => filterSelect("COLOR", input.checked, item)} checked={filter.colors.includes(item.color)} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="catalogMman__filter__widget">
                        <div className="catalogMan__filter__widget__title">
                            Kích thước
                        </div>
                        <div className="catalogMan__filter__widget__content">
                            {
                                sizesMan.map((item, index) => (
                                    <div key={index} className="catalogMan__filter__widget__content__item">
                                        <Checkbox label={item.display} onChange={(input) => filterSelect("SIZE", input.checked, item)} checked={filter.sizes.includes(item.size)} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="catalogMman__filter__widget">

                        <span className="add1" onClick={clearFilter}>Xóa bộ lọc</span>

                    </div>
                </div>
                <div className="catalogMan__content">
                    <input type="text" onChange={onChange} placeholder="Search..." />
                    <select
                        onChange={onChangeSort}
                    >
                        <option value="desc">Giảm dần</option>
                        <option value="asc">Tăng dần</option>
                    </select>
                    <div className="catalogMan__content__filter" onClick={onFilter}>Bộ lọc</div>

                    <Grid col={3} mdCol={2} smCol={1} gap={100}>
                        {
                            products.map((item, index) => (
                                <ProductCardMan key={index} slug={item.slug} img01={item.img01} img02={item.img02} price={item.price} name={item.title} res={item.res} />
                            ))
                        }
                    </Grid>
                </div>
            </div>
        </Section>
    )
}

export default CatalogMan
