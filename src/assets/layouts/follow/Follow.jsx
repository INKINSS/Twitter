import { Anchor } from 'antd'
import './Follow.scss'
import PostUser from '../../components/PostUser/PostUser'

const Follow = () => {


    return (
        <section>
            <Anchor
                className='anchor'
                direction="horizontal"
                items={[
                    {
                        key: 'part-1',
                        href: '#part-1',
                        title: 'Para ti',
                    },
                    {
                        key: 'part-2',
                        href: '#part-2',
                        title: 'Siguiendo',
                    }
                ]}
            >

            </Anchor>
            <div className='follow'>
                <PostUser />
            </div>
        </section>
    )
}

export default Follow
