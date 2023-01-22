
import {Layout} from '~/components/index.server';
import {Seo} from '@shopify/hydrogen';
  import {Suspense} from 'react';
  import {PageHeader} from '~/components';

export default function Contact() {



    return (
        <Layout>
          <Seo type="page" data={{title: 'contact'}} />
          <PageHeader heading={"contact"} className="gap-0">
            <Suspense>
              <div>Contact</div>
            </Suspense>
          </PageHeader>
        </Layout>
      );
}