import user from '../../../data/User.json'


const Comments = () => {
    return (
        <section>
            { user.map( ( item, index ) => (
                <p key={ index }>{ item.comment }</p>
            )) }
        </section>
    )
}

export default Comments
