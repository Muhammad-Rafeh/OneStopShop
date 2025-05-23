import { ContentWrapper } from "@/components/content-wrapper";
import { SlideShow } from "@/components/slideshow";
import { Heading } from "@/components/ui/heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { db } from "@/db/db";
import { products, stores } from "@/db/schema";
import { eq } from "drizzle-orm";
import { PropsWithChildren } from "react";
import { ProductAndStore } from "./products/page";
import { ProductCard } from "@/components/storefront/product-card";
import { Button } from "@/components/ui/button";
import { routes } from "@/lib/routes";
import Link from "next/link";
import { FeatureBanner } from "../components/feature-banner";
import {
  AlarmClock,
  DollarSign,
  FastForward,
  Phone,
  Truck,
  User,
  Wind,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { TextInputWithLabel } from "@/components/text-input-with-label";

export default async function Home() {
  const storeAndProduct = (await db
    .select({
      product: products,
      store: {
        id: stores.id,
        name: stores.name,
        slug: stores.slug,
      },
    })
    .from(products)
    .leftJoin(stores, eq(products.storeId, stores.id))
    .limit(8)) as ProductAndStore[];

  return (
    <div>
      <SlideShow />
      <ContentWrapper>
        <Tabs defaultValue="for-buyers">
          <div className="flex items-center justify-center mt-2 mb-8">
            <TabsList>
              <TabsTrigger value="for-buyers">For Buyers</TabsTrigger>
              <TabsTrigger value="for-sellers">For Sellers</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="for-sellers">
            <HomePageLayout
              heading={<Heading size="h1">Sell online with ease.</Heading>}
              subheading={
                <Heading size="h2">
                  Access our global marketplace and sell your <br /> products to
                  over 1 million visitors.
                </Heading>
              }
            >
              <div className="md:grid md:grid-cols-3 gap-4 flex flex-col mt-12">
                <FeatureBanner
                  heading="No monthly fees"
                  subheading="Fugit voluptates nihil ex et voluptas dignissimos blanditiis. Consectetur velit pariatur nihil quis nihil similique voluptatum in. Et nostrum ipsam quo magni. Velit et odit dolores."
                  icon={<DollarSign size={32} />}
                />
                <FeatureBanner
                  heading="Access to millions of buyers"
                  subheading="Fugit voluptates nihil ex et voluptas dignissimos blanditiis. Consectetur velit pariatur nihil quis nihil similique voluptatum in. Et nostrum ipsam quo magni. Velit et odit dolores."
                  icon={<User size={32} />}
                />
                <FeatureBanner
                  heading="Quick and easy setup"
                  subheading="Fugit voluptates nihil ex et voluptas dignissimos blanditiis. Consectetur velit pariatur nihil quis nihil similique voluptatum in. Et nostrum ipsam quo magni. Velit et odit dolores."
                  icon={<AlarmClock size={32} />}
                />
              </div>
              <div className="flex items-center justify-center mt-12">
                <Link href={routes.signUp}>
                  <Button size="lg">Create account</Button>
                </Link>
              </div>
            </HomePageLayout>
          </TabsContent>
          <TabsContent value="for-buyers">
            <HomePageLayout
              heading={<Heading size="h1">Online Construction made easy.</Heading>}
              subheading={
                <Heading size="h2">
                  🏗 Welcome to PEC – Pakistan Engineering Consultancy
Connecting Clients with Verified Engineers & Skilled Construction Experts

At PEC, we make construction simple, secure, and professional. Whether you need expert supervision, a qualified engineer, or skilled workers like electricians, painters, or tilers — we bring them all to one platform.

Our mission is to streamline the construction process by ensuring every project is managed by trusted professionals with verified work history and strong client feedback
                </Heading>
              }
            >
              <Heading size="h3">Top Picks</Heading>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-auto mt-4">
                {storeAndProduct.map((item) => (
                  <ProductCard
                    key={item.product.id}
                    storeAndProduct={item}
                    hideButtonActions={true}
                  />
                ))}
              </div>
              <div className="mt-12 grid place-content-center">
                <Link href={routes.products}>
                  <Button variant="default">View All Contractors</Button>
                </Link>
              </div>
              <div className="bg-green-700 text-white w-full p-12 rounded-md mt-12 flex items-center flex-col gap-2 justify-center text-center">
                <p className="uppercase tracking-wide text-sm font-medium">
                  Featured seller
                </p>
                <p className="text-3xl font-bold">Lets Concrete Together</p>
                <p>
                  Top Professional of the Month! Our verified engineer Osama brings years of hands-on experience and has consistently delivered top-rated construction supervision and consultancy services through our platform
                </p>
                <Link
                  href={routes.products + "?seller=tims-toys"}
                  className="mt-6"
                >
                  <Button variant="secondary">Explore seller</Button>
                </Link>
              </div>
              <div className="md:grid md:grid-cols-3 gap-4 flex flex-col mt-12">
               
              
                <FeatureBanner
                  heading="Best prices"
                  subheading="We offer the best prices on the market."
                  icon={<DollarSign size={32} />}
                />
              </div>
            </HomePageLayout>
          </TabsContent>
        </Tabs>
      </ContentWrapper>
    </div>
  );
}

const HomePageLayout = (
  props: PropsWithChildren<{
    heading: React.ReactNode;
    subheading: React.ReactNode;
  }>
) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-2 text-center mb-12 pt-2">
        {props.heading}
        <div className="text-slate-600">{props.subheading}</div>
      </div>
      {props.children}
    </>
  );
};
