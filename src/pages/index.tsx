import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import BaseLayout from '@/components/layouts/baseLayout'
const Page: NextPageWithLayout = () => {
  return <></>
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      {page}
      <div className={"home_banner"}>
        <section className="banner">
          <div className='banner_div'>
            
          <p style={{fontSize: "20px"}}>BIENVENUE SUR L'AETHTEAM SHOP</p>
          <h1>Un des seul <span>Site de présentation et du vente mcpe</span></h1>
          <p>Commencez dès maintenant à regarder sur notre site des multitudes se map, plugin et texture pack pour minecraft bedrock</p>

          </div>
        </section>
      </div>
    </BaseLayout>
  )
}

export default Page