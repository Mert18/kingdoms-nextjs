import React from 'react'
import classes from './kingdoms.module.css'
import Image from 'next/image'

const Greaies = () => {
    return (
        <div className={classes.kingdom}>
            <div className={classes.head}>
                <div className={classes.text}>
                    <h2>GREAIES</h2>
                </div>
            </div>
            <div className={classes.content}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis, velit et pellentesque sodales, purus quam mattis erat, non laoreet purus est quis lacus. Ut laoreet fermentum dui id porttitor. Donec a diam tortor. Vestibulum aliquam dolor nisl, id ultrices nisi interdum eu. Donec porttitor, neque in feugiat condimentum, magna metus feugiat mi, iaculis ornare ligula lacus eget arcu. Praesent rutrum nibh id tempus hendrerit. Donec euismod nisi ut blandit commodo. Praesent accumsan eu sem in imperdiet. Morbi laoreet erat nec mattis consectetur.
                </p>
            </div>
            <div className={classes.join}>
                <button>Join</button>
            </div>
            <div className={classes.foot}>
                <div className={classes.leader}>
                    <div className={classes.leader__img}>
                        <Image src='/images/org.jpg' width='120px' height='120px' />
                    </div>
                    <div className={classes.leader__txt}>
                        <h2>Hanubi Huaiyan</h2>
                        <p>
                            Aliquam porttitor ac nisl et vehicula. Proin et mauris id massa aliquam dapibus.
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Greaies
