import Head from 'next/head'
import Navigation from './navigation'


const Container = (props) => {
    return (
        <div>
            <Head>
                <title>Next.js Project</title>
                <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css" />
            </Head>
            <Navigation />
            <div className="container p-4">
                {props.children}
            </div>
        </div>
    )
}

export default Container;