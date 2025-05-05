"use client"

import { useRef, useMemo, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, PerspectiveCamera, Text, MeshReflectorMaterial, Float, Sparkles } from "@react-three/drei"
import * as THREE from "three"
import { useTheme } from "./theme-provider"

function ExercisingPerson({ position = [0, 0, 0], scale = 1 }) {
  const groupRef = useRef()
  const [animationPhase, setAnimationPhase] = useState(0)
  const [breathingIntensity, setBreathingIntensity] = useState(0)

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.getElapsedTime()
      
      const breath = Math.sin(time * 2) * 0.05 * (1 + breathingIntensity)
      groupRef.current.position.y = breath
      
      setAnimationPhase((time % 4) / 4) // 4-second cycle
      
      if (time % 5 < 0.1) {
        setBreathingIntensity(Math.random() * 0.5)
      }
    }
  })

  const clothesMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: "#0a84ff",
    metalness: 0.3,
    roughness: 0.7,
    emissive: "#0a84ff",
    emissiveIntensity: 0.05
  }), [])

  const skinMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: "#e0ac69",
    roughness: 0.8,
    metalness: 0.1
  }), [])

  const pantsMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: "#222",
    metalness: 0.2,
    roughness: 0.8
  }), [])

  // Enhanced Arm Animation
  const leftArmRotation = useMemo(() => {
    const rot = -Math.PI/2 + Math.sin(animationPhase * Math.PI * 2) * 0.7
    return [0, 0, rot]
  }, [animationPhase])

  const rightArmRotation = useMemo(() => {
    const rot = Math.PI/2 - Math.sin(animationPhase * Math.PI * 2) * 0.7
    return [0, 0, rot]
  }, [animationPhase])

  const forearmRotation = useMemo(() => {
    return [0, 0, Math.sin(animationPhase * Math.PI * 2) * 0.9]
  }, [animationPhase])

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Enhanced Head with facial features */}
      <group position={[0, 1.7, 0]}>
        <mesh>
          <sphereGeometry args={[0.25, 32, 32]} />
          <primitive object={skinMaterial} attach="material" />
        </mesh>
        {/* Eyes */}
        <mesh position={[0.1, 0.05, 0.2]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial color="#111" />
        </mesh>
        <mesh position={[-0.1, 0.05, 0.2]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial color="#111" />
        </mesh>
      </group>

      {/* Enhanced Torso with muscle definition */}
      <group position={[0, 1.2, 0]}>
        <mesh>
          <boxGeometry args={[0.5, 0.6, 0.3]} />
          <primitive object={clothesMaterial} attach="material" />
        </mesh>
        
        {/* Muscle definition */}
        <mesh position={[0, 1.25, 0.15]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <primitive object={clothesMaterial} attach="material" />
        </mesh>
      </group>

      {/* Enhanced Abdomen */}
      <mesh position={[0, 0.8, 0]}>
        <boxGeometry args={[0.4, 0.2, 0.25]} />
        <primitive object={clothesMaterial} attach="material" />
      </mesh>

      {/* Enhanced Legs with better proportions */}
      <group>
        <mesh position={[-0.15, 0.4, 0]}>
          <boxGeometry args={[0.15, 0.7, 0.25]} />
          <primitive object={pantsMaterial} attach="material" />
        </mesh>
        <mesh position={[0.15, 0.4, 0]}>
          <boxGeometry args={[0.15, 0.7, 0.25]} />
          <primitive object={pantsMaterial} attach="material" />
        </mesh>
        
        {/* Feet */}
        <mesh position={[-0.15, 0.05, 0.1]}>
          <boxGeometry args={[0.2, 0.1, 0.3]} />
          <meshStandardMaterial color="#333" />
        </mesh>
        <mesh position={[0.15, 0.05, 0.1]}>
          <boxGeometry args={[0.2, 0.1, 0.3]} />
          <meshStandardMaterial color="#333" />
        </mesh>
      </group>

      {/* Enhanced Arms with better animations */}
      <group position={[0, 1.2, 0]}>
        {/* Left Arm */}
        <group position={[-0.3, 0, 0]} rotation={leftArmRotation}>
          <mesh position={[-0.2, 0, 0]}>
            <boxGeometry args={[0.4, 0.15, 0.15]} />
            <primitive object={clothesMaterial} attach="material" />
          </mesh>

          {/* Forearm */}
          <group position={[-0.4, 0, 0]} rotation={forearmRotation}>
            <mesh position={[-0.2, 0, 0]}>
              <boxGeometry args={[0.4, 0.12, 0.12]} />
              <primitive object={skinMaterial} attach="material" />
            </mesh>

            {/* Hand */}
            <mesh position={[-0.4, 0, 0]}>
              <sphereGeometry args={[0.08, 16, 16]} />
              <primitive object={skinMaterial} attach="material" />
            </mesh>

            {/* Dumbbell */}
            <EnhancedDumbbell position={[-0.5, 0, 0]} scale={0.7} />
          </group>
        </group>

        {/* Right Arm */}
        <group position={[0.3, 0, 0]} rotation={rightArmRotation}>
          <mesh position={[0.2, 0, 0]}>
            <boxGeometry args={[0.4, 0.15, 0.15]} />
            <primitive object={clothesMaterial} attach="material" />
          </mesh>

          {/* Forearm */}
          <group position={[0.4, 0, 0]} rotation={[-forearmRotation[0], -forearmRotation[1], -forearmRotation[2]]}>
            <mesh position={[0.2, 0, 0]}>
              <boxGeometry args={[0.4, 0.12, 0.12]} />
              <primitive object={skinMaterial} attach="material" />
            </mesh>

            {/* Hand */}
            <mesh position={[0.4, 0, 0]}>
              <sphereGeometry args={[0.08, 16, 16]} />
              <primitive object={skinMaterial} attach="material" />
            </mesh>

            {/* Dumbbell */}
            <EnhancedDumbbell position={[0.5, 0, 0]} scale={0.7} />
          </group>
        </group>
      </group>
    </group>
  )
}

// Enhanced Dumbbell Component
function EnhancedDumbbell({ position = [0, 0, 0], scale = 1 }) {
  const groupRef = useRef()
  const [rotationSpeed] = useState(() => Math.random() * 0.01 + 0.005)

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += rotationSpeed
    }
  })

  const goldMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: "#d4af37",
    metalness: 1,
    roughness: 0.1,
    emissive: "#d4af37",
    emissiveIntensity: 0.1
  }), [])

  const steelMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: "#888",
    metalness: 0.9,
    roughness: 0.1
  }), [])

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Left Weight */}
      <group position={[-0.5, 0, 0]}>
        <mesh>
          <cylinderGeometry args={[0.3, 0.3, 0.2, 32]} />
          <primitive object={goldMaterial} attach="material" />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 0.25, 32]} />
          <meshStandardMaterial color="#222" metalness={0.9} roughness={0.2} />
        </mesh>
      </group>

      {/* Bar */}
      <mesh rotation={[0, 0, Math.PI/2]}>
        <cylinderGeometry args={[0.05, 0.05, 1, 16]} />
        <primitive object={steelMaterial} attach="material" />
      </mesh>

      {/* Grip */}
      <mesh rotation={[0, 0, Math.PI/2]}>
        <cylinderGeometry args={[0.08, 0.08, 0.4, 32]} />
        <meshStandardMaterial color="#111" roughness={0.8} />
      </mesh>

      {/* Right Weight */}
      <group position={[0.5, 0, 0]}>
        <mesh>
          <cylinderGeometry args={[0.3, 0.3, 0.2, 32]} />
          <primitive object={goldMaterial} attach="material" />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 0.25, 32]} />
          <meshStandardMaterial color="#222" metalness={0.9} roughness={0.2} />
        </mesh>
      </group>
    </group>
  )
}

// Modelo de pesa elegante
function LuxuryDumbbell({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1 }) {
  const groupRef = useRef()

  // Texturas para materiales elegantes
  const metalTexture = useMemo(() => {
    const texture = new THREE.TextureLoader().load("/placeholder.svg?height=200&width=200")
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping
    texture.repeat.set(1, 1)
    return texture
  }, [])

  // Animación suave
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.05
    }
  })

  return (
    <group ref={groupRef} position={position} rotation={rotation} scale={scale}>
      {/* Pesa izquierda */}
      <group position={[-1.2, 0, 0]}>
        {/* Disco exterior */}
        <mesh>
          <cylinderGeometry args={[0.6, 0.6, 0.2, 32]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} envMapIntensity={1} />
        </mesh>

        {/* Disco interior */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.4, 0.4, 0.3, 32]} />
          <meshStandardMaterial color="#222" metalness={0.9} roughness={0.2} envMapIntensity={1} />
        </mesh>

        {/* Borde del disco - dorado */}
        <mesh position={[0, 0, 0.1]}>
          <torusGeometry args={[0.6, 0.03, 16, 32]} />
          <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.1} envMapIntensity={2} />
        </mesh>

        <mesh position={[0, 0, -0.1]}>
          <torusGeometry args={[0.6, 0.03, 16, 32]} />
          <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.1} envMapIntensity={2} />
        </mesh>
      </group>

      {/* Barra central */}
      <group>
        {/* Barra principal */}
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.08, 0.08, 2.4, 16]} />
          <meshStandardMaterial color="#888" metalness={0.9} roughness={0.1} envMapIntensity={1} />
        </mesh>

        {/* Agarre central */}
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.12, 0.12, 0.8, 32]} />
          <meshStandardMaterial
            color="#111"
            metalness={0.3}
            roughness={0.8}
            normalMap={metalTexture}
            normalScale={new THREE.Vector2(0.5, 0.5)}
          />
        </mesh>

        {/* Anillos decorativos - dorados */}
        <mesh position={[-0.45, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.12, 0.02, 16, 32]} />
          <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.1} envMapIntensity={2} />
        </mesh>

        <mesh position={[0.45, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.12, 0.02, 16, 32]} />
          <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.1} envMapIntensity={2} />
        </mesh>
      </group>

      {/* Pesa derecha (espejo de la izquierda) */}
      <group position={[1.2, 0, 0]}>
        {/* Disco exterior */}
        <mesh>
          <cylinderGeometry args={[0.6, 0.6, 0.2, 32]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} envMapIntensity={1} />
        </mesh>

        {/* Disco interior */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.4, 0.4, 0.3, 32]} />
          <meshStandardMaterial color="#222" metalness={0.9} roughness={0.2} envMapIntensity={1} />
        </mesh>

        {/* Borde del disco - dorado */}
        <mesh position={[0, 0, 0.1]}>
          <torusGeometry args={[0.6, 0.03, 16, 32]} />
          <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.1} envMapIntensity={2} />
        </mesh>

        <mesh position={[0, 0, -0.1]}>
          <torusGeometry args={[0.6, 0.03, 16, 32]} />
          <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.1} envMapIntensity={2} />
        </mesh>
      </group>
    </group>
  )
}

// Suelo reflectante elegante
function ReflectiveFloor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, 0]}>
      <planeGeometry args={[50, 50]} />
      <MeshReflectorMaterial
        blur={[300, 100]}
        resolution={1024}
        mixBlur={1}
        mixStrength={50}
        roughness={0.8}
        depthScale={1.2}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        color="#050505"
        metalness={0.5}
      />
    </mesh>
  )
}

// Texto 3D elegante
function ElegantText() {
  return (
    <Float
      speed={2} // Velocidad de animación
      rotationIntensity={0.2} // Intensidad de rotación XYZ
      floatIntensity={0.5} // Intensidad de flotación arriba/abajo
    >
      <group position={[0, 2.5, 0]}>
        <Text position={[0, 0, 0]} fontSize={0.8} font="/fonts/Geist_Bold.json" anchorX="center" anchorY="middle">
          FITLIFE
          <meshStandardMaterial
            color="#ffffff"
            metalness={0.5}
            roughness={0.2}
            emissive="#ffffff"
            emissiveIntensity={0.2}
          />
        </Text>
        <Text position={[0, -0.8, 0]} fontSize={0.4} font="/fonts/Geist_Bold.json" anchorX="center" anchorY="middle">
          PREMIUM GYM
          <meshStandardMaterial
            color="#d4af37"
            metalness={1}
            roughness={0.1}
            emissive="#d4af37"
            emissiveIntensity={0.2}
          />
        </Text>
      </group>
    </Float>
  )
}

function LuxuryGymScene() {
  const sceneRef = useRef()
  const { theme } = useTheme()

  useFrame((state) => {
    if (sceneRef.current) {
      sceneRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1
    }
  })

  return (
    <group ref={sceneRef}>
      {/* Texto 3D elegante */}
      <ElegantText />

      {/* Persona ejercitándose */}
      <ExercisingPerson position={[0, -1, 1]} scale={1.2} />

      {/* Pesas elegantes */}
      <LuxuryDumbbell position={[-3.5, 0, -2]} scale={0.5} />
      <LuxuryDumbbell position={[3.5, 0, -2]} scale={0.5} />

      {/* Suelo reflectante */}
      <ReflectiveFloor />

      {/* Partículas brillantes */}
      <Sparkles count={100} scale={10} size={1} speed={0.3} opacity={0.2} color="#d4af37" />

      {/* Esferas decorativas */}
      <mesh position={[-4, 1, -2]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.1} envMapIntensity={2} />
      </mesh>

      <mesh position={[4, 1, -2]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.1} envMapIntensity={2} />
      </mesh>

      {/* Anillos decorativos */}
      <mesh position={[0, 0, -3]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2, 0.05, 16, 100]} />
        <meshStandardMaterial
          color="#d4af37"
          metalness={1}
          roughness={0.1}
          envMapIntensity={2}
          transparent={true}
          opacity={0.7}
        />
      </mesh>
    </group>
  )
}

export function Fitness3DModel() {
  const { theme } = useTheme();

  return (
    <div className="h-full w-full">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={40} />
        <ambientLight intensity={0.2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={0.5} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.2} />
        <pointLight position={[5, 5, 5]} intensity={0.5} color="#d4af37" />
        <pointLight position={[-5, 5, 5]} intensity={0.5} color="#ffffff" />

        <LuxuryGymScene />

        <Environment preset={theme === "dark" ? "night" : "warehouse"} background={false} />
      </Canvas>
    </div>
  )
}
