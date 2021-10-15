import React from 'react'
import { Link } from 'react-router-dom'
import HeroSlider from '../components/HeroSlider'
import Section, { SectionBody, SectionTitle } from '../components/Section'
import Grid from '../components/Grid'
import policy from '../assets/fake-data/policy'
import PolicyCard from '../components/PolicyCard'
import productsWoman from '../assets/fake-data/productsWoman'
import ProductCard from '../components/ProductCard'
import Introduction from '../components/Introduction'
import Sales from './../components/Sales'
import sales from '../assets/fake-data/sale'
import productsman from '../assets/fake-data/productsman'
import CustomerResponse from '../components/CustomerResponse'
import gifts from '../assets/fake-data/gift'
import Gift from '../components/Gift'
import Email from '../components/Email'
import ProductCardMan from '../components/ProductCardMan'
const Home = () => {
    return (
        <div>
            <Section>
                <HeroSlider />
            </Section>

            <Section>
                <SectionTitle>CHÍNH SÁCH</SectionTitle>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={1} gap={20}>
                        {
                            policy.map((item, index) => (
                                <PolicyCard key={index} icon={item.icon} name={item.name} description={item.description} />
                            ))
                        }
                    </Grid></SectionBody>
            </Section>

            <Section>
                <SectionTitle>THỜI TRANG THỂ THAO NỮ</SectionTitle>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={1} gap={20}>
                        {
                            productsWoman.map((item, index) => (
                                <ProductCard slug={item.slug} key={index} img01={item.img01} img02={item.img02} price={item.price} name={item.title} res={item.res} />
                            ))
                        }
                    </Grid>
                    <Link to="/product/catalogWoman"> <div className="add">Xem thêm</div></Link>

                </SectionBody>
            </Section>

            <Section>
                <Introduction />
            </Section>

            <Section>
                <Grid col={4} mdCol={2} smCol={1}>
                    {
                        sales.map((item, index) => (
                            <Sales img={item.img} />
                        ))
                    }
                </Grid>
            </Section>

            <Section>
                <SectionTitle>THỜI TRANG THỂ THAO NAM</SectionTitle>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={1} gap={20}>
                        {
                            productsman.map((item, index) => (
                                <ProductCardMan key={index} img01={item.img01} img02={item.img02} price={item.price} name={item.title} res={item.res} slug={item.slug} />
                            ))
                        }
                    </Grid>
                    <Link to="/product/catalogMan"> <div className="add">Xem thêm</div></Link>
                </SectionBody>

            </Section>

            <Section>
                <CustomerResponse />
            </Section>

            <Section>
                <Grid col={6} mdCol={4} smCol={2} gap={20}>
                    {
                        gifts.map((item, index) => (
                            <Gift img={item.img} key={index} />
                        ))
                    }

                </Grid>
                <Email />
            </Section>


        </div>

    )
}

export default Home
