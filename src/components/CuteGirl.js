/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei';

export default function Model({ ...props }) {
  const [action, setAction] = useState('standAlone')
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/cuteGirl.glb')
  const { actions } = useAnimations(animations, group)
  const previousAction = usePrevious(action);
  
  
  const animatingEvent = ()=>{
    window.addEventListener('keydown', (e)=>{
      if(e.key === 'ArrowUp'){
        setAction('walk')
        
      }
      if(e.key === 'r'){
        setAction('slowRun')
        
      }
    })
  }

  const stopAnimation = ()=>{
    window.addEventListener('keyup', (e)=>{
      setAction('standAlone')
     
    })
  }
  animatingEvent();
  stopAnimation()
  useEffect(() => {
    if (previousAction) {
      actions[previousAction].fadeOut(0.2);
      actions[action].stop();
    }
    actions[action].play();
    actions[action].fadeIn(0.2);
  }, [actions, action, previousAction]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.4}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh name="Ch46" geometry={nodes.Ch46.geometry} material={materials.Ch46_body} skeleton={nodes.Ch46.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/cuteGirl.glb')

function usePrevious(val) {
  const ref = useRef();
  useEffect(()=>{
    ref.current = val;
  },[val])

  return ref.current;
}