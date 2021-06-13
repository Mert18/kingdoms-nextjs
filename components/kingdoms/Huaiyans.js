import React from 'react'
import classes from './kingdoms.module.css'
import Image from 'next/image'

const Huaiyans = () => {
    return (
        <div className={classes.kingdom}>
            <div className={classes.head}>
                <div className={classes.text}>
                    <h2>HUAIYANS</h2>
                </div>
            </div>
            <div className={classes.content}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis, velit et pellentesque sodales, purus quam mattis erat, non laoreet purus est quis lacus. Ut laoreet fermentum dui id porttitor. Donec a diam tortor. Vestibulum aliquam dolor nisl, id ultrices nisi interdum eu. Donec porttitor, neque in feugiat condimentum, magna metus feugiat mi, iaculis ornare ligula lacus eget arcu. Praesent rutrum nibh id tempus hendrerit. Donec euismod nisi ut blandit commodo. Praesent accumsan eu sem in imperdiet. Morbi laoreet erat nec mattis consectetur. Vestibulum ullamcorper erat ac orci cursus, at commodo nibh congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum lorem sed nulla dapibus rhoncus. Cras convallis augue eget mi bibendum, porta vestibulum elit dignissim.

                    Aliquam porttitor ac nisl et vehicula. Proin et mauris id massa aliquam dapibus. Aenean felis massa, tincidunt vehicula nulla sit amet, interdum tincidunt lacus. Donec sodales elementum sapien ut aliquam. Sed in interdum tellus. Sed suscipit elit ligula, nec cursus sem mattis lacinia. Integer elementum, ligula quis lobortis posuere, diam nunc gravida ex, sed cursus orci ligula et augue.

                    Maecenas iaculis orci quis dui faucibus, sed suscipit mauris semper. Praesent condimentum diam ex, a faucibus erat malesuada nec. Phasellus vitae interdum mauris. Integer bibendum fermentum massa vitae mollis. Praesent ante dolor, ullamcorper eu sapien vel, tempor fringilla lorem. Praesent faucibus, diam a euismod facilisis, felis risus fringilla leo, at auctor purus tortor id eros. Praesent gravida libero sit amet dapibus molestie. Mauris sit amet dui mattis, sagittis tellus eu, feugiat erat. In non vestibulum dolor. Duis id nisi interdum, efficitur odio sit amet, pellentesque leo. Pellentesque sapien tortor, posuere vitae egestas at, aliquam nec nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer vel felis euismod, finibus nibh pulvinar, laoreet libero. Aliquam rhoncus massa vel faucibus maximus.
                </p>
            </div>
            <div className={classes.foot}>
                <div className={classes.leader}>
                    <div className={classes.leader__img}>
                        <Image src='/images/wht.jpg' width='120px' height='120px' />
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

export default Huaiyans
