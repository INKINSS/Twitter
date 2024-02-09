import { Anchor } from 'antd'
import './Follow.scss'

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
                <div
                    className='sectionFollow'
                    id="part-1"
                    style={{
                        width: '100vw',
                        height: '100vh',
                        textAlign: 'center',
                    }}
                />
                <div
                    id="part-2"
                    style={{
                        width: '100vw',
                        height: '100vh',
                        textAlign: 'center',
                    }}
                />
            </div>
        </section>
    )
}

export default Follow
