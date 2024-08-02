import { sayHello } from "@/lib/actions"

const ServerActionTestPage = () => {

    const actionincomponent = async () => {
        "use server"
        console.log("itworks!")
    }
    return (
        <div>
            <form action={actionincomponent}>
                <input type="text" placeholder="title"/>
                <input type="text" placeholder="desc"/>
                <input type="text" placeholder="slug"/>
                <button>Test me</button>
            </form>
        </div>
    )
}

export default ServerActionTestPage
