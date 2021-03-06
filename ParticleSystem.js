import * as THREE from 'three';

class ParticleSystem {
    constructor() {
        this.bind();
        this.particleCount = 3000;
        this.boxSize = 2;

    }

    init(scene) {
        this.scene = scene
        this.particlesGeom = new THREE.BufferGeometry()
        this.particlesPos = []

        for (let p = 0; p < this.particleCount; p++) {

            let x = Math.random() * this.boxSize - this.boxSize / 2;
            let y = Math.random() * this.boxSize - this.boxSize / 2;
            let z = Math.random() * this.boxSize - this.boxSize / 2;

            // Create the vertex
            this.particlesPos.push(x, y, z);
        }

        this.particlesGeom.setAttribute('position', new THREE.Float32BufferAttribute(this.particlesPos, 3));

        this.textLoader = new THREE.TextureLoader()
        let eyes = this.textLoader.load("./particle.png")

        this.particleMaterial = new THREE.PointsMaterial(
            {
                color: 0xffffff,
                size: .05,
            });

        this.particleSystem = new THREE.Points(this.particlesGeom, this.particleMaterial);
        console.log(this.particlesGeom.attributes.position.array);
        this.scene.add(this.particleSystem)
    }

    update() {
        for (let i = 0; i < this.particleCount; i++) {
            // this.particlesGeom.attributes.position.array[i * 3 + 0] += 0.01
            // this.particlesGeom.attributes.position.array[i * 3 + 1] += 0.01
            // this.particlesGeom.attributes.position.array[i * 3 + 2] += 0.01
        }

        this.particlesGeom.attributes.position.needsUpdate = true;
    }

    bind() {
        this.init = this.init.bind(this)
        this.update = this.update.bind(this)
    }

}

const _instance = new ParticleSystem()
export default _instance