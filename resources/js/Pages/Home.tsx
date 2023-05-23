import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";

export default function Home({ auth }: PageProps) {
    return (
        <>
            <Head title="Home" />
            <main className="grid gap-4 grid-cols-2">
                <div className="w-96">
                    {auth.user ? (
                        <Link href={route("dashboard")} className="block">
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link href={route("login")} className="block">
                                Log in
                            </Link>

                            <Link href={route("register")} className="block">
                                Register
                            </Link>
                        </>
                    )}
                </div>
                <div className="p-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia, tempore assumenda. Consequuntur expedita nihil
                    labore rerum laudantium ipsum quaerat ipsam illo optio
                    pariatur, praesentium fugit neque possimus deserunt
                    repellendus quo, eaque, eum omnis! Ducimus aperiam, quisquam
                    sequi distinctio cumque voluptatum optio quibusdam ratione
                    aliquid alias, repudiandae voluptate eum totam asperiores
                    maiores beatae omnis, nesciunt porro. Saepe, fugit? Maxime
                    incidunt fugiat inventore officia, culpa reprehenderit fuga
                    saepe dolorum quasi qui sit explicabo delectus commodi eaque
                    et, est sapiente. Eligendi ipsa officiis quas distinctio
                    culpa dolore nesciunt eos beatae saepe tenetur impedit,
                    omnis sed exercitationem, blanditiis id nam corrupti! Fugit
                    quisquam quo accusantium laboriosam, saepe, aperiam quidem
                    quas temporibus at adipisci excepturi beatae. Quae
                    consequatur obcaecati enim quisquam dignissimos aperiam ad
                    illum, sapiente mollitia ut eveniet iste voluptatibus
                    aliquam omnis impedit? In excepturi rerum obcaecati impedit
                    maiores rem, voluptatum aspernatur eum modi placeat, debitis
                    similique aliquid illo repudiandae dolorem id enim animi
                    perferendis officiis ipsam dolore reiciendis? Non beatae
                    sequi aliquam expedita. Asperiores est labore architecto
                    porro? Consectetur cum non dignissimos numquam voluptas
                    fugit consequuntur deleniti, voluptates quae temporibus
                    velit? Nesciunt hic dolorem laboriosam aut nisi eius
                    consequatur commodi voluptate repellendus culpa dolorum
                    rerum, officiis vel. Sapiente exercitationem incidunt ullam
                    praesentium iste esse consequuntur aperiam suscipit
                    repellendus! Blanditiis a quaerat ad pariatur necessitatibus
                    doloremque sint doloribus eum quidem totam debitis quae quam
                    voluptate magnam, nemo commodi perferendis autem numquam
                    corporis velit cupiditate ab, ducimus possimus quasi.
                    Voluptatum libero perspiciatis facere veritatis, nobis
                    deleniti, praesentium nisi temporibus animi enim dolorum est
                    ipsum hic officiis! Similique aspernatur aut qui hic
                    laboriosam maiores at delectus, sapiente reiciendis tenetur
                    atque inventore veritatis, fugiat molestias, repellendus
                    consequatur iusto tempore! Tempora perferendis maxime velit
                    fugiat praesentium nisi aliquid expedita dolor explicabo
                    pariatur consectetur exercitationem illum, sit voluptatem
                    tenetur distinctio earum unde eveniet vitae, magnam nihil
                    enim? Iusto, enim?
                </div>
            </main>
        </>
    );
}
