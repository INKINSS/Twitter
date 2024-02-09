import user from '../../../data/User.json'

const InfoUser = () => {
    return (
        <section>
            { user.map( ( item, index ) => (
                <div className='infoUser' key={ index }>
                    <h2>{ item.username }</h2>
                    <h3>{ item.nick }</h3>
                    <span>{ item.publicationTime }</span>
                </div>
            )) }
        </section>
    )
}

export default InfoUser
