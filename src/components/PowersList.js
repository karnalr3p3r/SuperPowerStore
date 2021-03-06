import React, { Component } from 'react';
import Power from './SuperPower';
export const SuperPowerList = [
{
name: "Astral projection",
detail: "The ability to voluntarily project the astral body (consciousness), being associated with out-of-body experience, in which the astral body becomes separate from the physical body."
},
{
name: "Biological manipulation",
detail: "Ability to control all aspects of a living creature's biological make-up. This includes, but is not limited to, genetic alterations, physical distortion/augmentations, healing, disease, and biological functions."
},
{
name: "Bone manipulation",
detail: "Ability to manipulate the bones in one's own body. This includes, but is not limited to, the generation of new bone mass, projecting bones out from the skin or rearranging one's own bones."
},
{
name: "Cold and ice manipulation",
detail: "Ability to reduce the kinetic energy of atoms and thus reduce temperature, can be used to control, generate, or absorb ice"
},
{
name: "Cross-dimensional awareness",
detail: "Ability to detect actions and events in other dimensions. This is occasionally used in comics as an awareness of the fourth wall between the characters and the artist or audience."
},
{
name: "Darkness or shadow manipulation",
detail: "Ability to create or manipulate darkness, often by mentally accessing a dimension of dark energy (the Darkforce dimension in Marvel Comics, and the Shadowlands in DC Comics) and manipulating it"
},
{
name: "Echolocation",
detail: "Ability to determine location of objects in the environment by use of reflected sound waves, whether generated by the character or ambient sound. Also known as sonar or radar sense."
},
{
name: "Ecological empathy",
detail: "Ability to sense the overall well-being and conditions of one's immediate environment and natural setting stemming from a psychic sensitivity to nature"
},
{
name: "Electrical transportation",
detail: "Ability to travel through electrical conduits (such as power lines or telephone lines). Can enter through devices such as televisions, electrical poles or computers"
},
{
name: "Elemental transmutation",
detail: "The ability to alter chemical elements, changing them from one substance to another by rearranging the atomic structure. May be limited to self-transmutation"
},
{
name: "Energy constructs",
detail: "Ability to create complex shapes (such as giant boxing gloves or cages) or even functional machinery (such as fire extinguishers or laser rifles) out of solid energy"
},
{
name: "Energy sourcing",
detail: "Ability to draw power from large or small but abundant sources of energy, such as turning kinetic energy into physical blasts or converting solar energy into other forms. Sometimes based on proximity to source, sometimes stored for future use."
},
{
name: "Healing factor",
detail: "Ability to heal rapidly and with greater finality from any injury; the rate of recovery varies from character to character. Can sometimes result in the slowing of aging, regenerating entire human limbs and organs without hindrance from the Hayflick limit by completely removing it and immunity to illnesses and other defects."
},
{
name: "Immortality",
detail: "Ability to live forever. This may be complete immortality encompassing invulnerability, partial invulnerability to all but specific events (i.e., decapitation or exposure to a specific chemical such as kryptonite), or simply an inability to age normally."
},
{
name: "Kinetic absorption",
detail: "Ability to absorb forms of kinetic energy into oneself and utilize it in some way, such as by converting it into physical strength or using it to power energy blasts."
},
{
name: "Merging",
detail: "Ability to temporarily merge two or more beings into a single being, which results in a completely new and stronger being."
},
{
name: "Metamorphosis",
detail: "Ability to change one's physical, biological form to mimic the appearance, characteristics or power set of other individuals"
},
{
name: "Microwave manipulation",
detail: "The ability to convert ambient electromagnetic energy into microwaves and manipulate it into various effects such as heat, light, and radiation"
},
{
name: "Portal creation",
detail: "Ability to create wormholes, portation 'discs' or other spatial portals for transport between two non-adjacent locations"
},
{
name: "Precognition",
detail: "Ability to perceive the future. It may be expressed in vague dreams while asleep, other times it can be clear and can occur at will. It may also be used as a form of 'danger sense' to show the user that they are being threatened and from what direction it is coming from."
},
{
name: "Psionic blast",
detail: "Ability to overload another's mind causing pain, memory loss, lack of consciousness, vegetative state or death after having created a psionic link into that individual's mind"
},
{
name: "Psychic surgery",
detail: "The ability to remove disease or disorder within or over the body tissue via an 'energetic' incision that heals immediately afterwards."
},
{
name: "Psychometry",
detail: "Ability to relate details about the past or future condition of an object or location, usually by being in close contact with it"
},
{
name: "Reactive adaptation/evolution",
detail: "Ability to develop a resistance or immunity to whatever they were injured by or exposed to. This effect can be permanent or temporary."
},
{
name: "Summoning",
detail: "Ability to summon beings or objects for assistance. This may range from invoking simple implements to mighty familiar spirits."
},
{
name: "Superhuman agility / reflexes",
detail: "Ability to react faster than a normal human and to possess greater flexibility and with higher/farther jumping capacity."
},
{
name: "Superhuman durability / endurance",
detail: "Ability to have a higher resistance to one or more forms of damage before being injured as well as the ability to exert oneself in an activity indefinitely without becoming tired or survive for long periods of time without consumption or water."
},
{
name: "Superhuman speed",
detail: "The ability to move, run, fly, react, think, and sense at speeds much faster than a normal human. Those with this ability also have accelerated brain activity which allows them to process sensory information so fast that everything seems to be moving in slow motion while the user moves at normal speed."
},
{
name: "Technopathy",
detail: "Ability to manipulate technology. Manifested as a special form of electrical/telekinetic manipulation, a special form of 'morphing' which allows physical interaction with machines, or even a psychic ability that allows for mental interface with computer data"
},
{
name: "Vortex breath",
detail: "Ability to inhale/exhale with superhumanly powerful strength. This can range from exhalation on par with gale-force winds to inhalation on par with the power of a gravitational vortex. In some cases, freezing temperatures can also be achieved."
},
{
name: "Waterbreathing",
detail: "Ability to respirate through water in lieu of a gaseous medium. Not to be confused with an ability to go without breathing or to be able to breathe an alternative air supply."
},
{
name: "Weather manipulation",
detail: "Ability to control or mentally affect the weather. This includes the ability to generate various natural phenomena (rain, tornadoes, lightning, ocean currents, etc.) or control the intensity of the weather."
},
{
name: "Acid generation",
detail: "Ability to generate acid, can be manifested through touch or as a spray (e.g. acid spit, acid blood, etc.)."
},
{
name: "Air and wind manipulation",
detail: "Ability to control, generate, or absorb air or wind"
},
{
name: "Animal control",
detail: "Ability to communicate with animals, birds and even aquatic creatures and get them to perform tasks on command"
},
{
name: "Animal mimicry",
detail: "Ability to take on the abilities of certain animals."
},
{
name: "Animal morphing",
detail: "Ability to take on animal forms. May be able to take on the abilities of the altered form"
},
{
name: "Animation",
detail: "Ability to bring inanimate objects to life or to free an individual from petrification"
},
{
name: "Apportation",
detail: "The ability to undergo materialization, disappearance or teleportation of an object."
},
{
name: "Astral trapping",
detail: "Ability to cause an astral projection to stay on the astral plane, usually in one specific place"
},
{
name: "Aura reading",
detail: "The ability to perceive 'energy fields' surrounding people, places and things.[3][page needed]"
},
{
name: "Automatic writing",
detail: "The ability to write without conscious thought."
},
{
name: "Body part substitution",
detail: "Ability to replace one's limbs or other body parts with those of another."
},
{
name: "Clairaudience",
detail: "The ability to acquire information by paranormal auditory means."
},
{
name: "Claircognizance",
detail: "The ability to acquire psychic knowledge by means of intrinsic knowledge."
},
{
name: "Clairgustance",
detail: "The ability to perceive an ethereal substance without contact."
},
{
name: "Clairolfactance",
detail: "The ability to access spiritual or mediumistic knowledge through smell."
},
{
name: "Clairsentience",
detail: "The ability to acquire psychic knowledge by feeling."
},
{
name: "Clairvoyance",
detail: "The ability to perceive person, object, location, and physical events through extrasensory perception."
},
{
name: "Concussion beams",
detail: "Ability to generate or transform various forms of energy into a 'solid' or concussive beam of energy"
},
{
name: "Density control",
detail: "Ability to increase or decrease the natural density of an object or one's self"
},
{
name: "Density/size shifting",
detail: "Ability to increase or decrease one's density or size"
},
{
name: "Dimensional travel",
detail: "Ability to travel between two or more dimensions, realities, realms, etc."
},
{
name: "Disintegration",
detail: "Ability to disintegrate matter through touch, telepathy or through beams"
},
{
name: "Divination",
detail: "The ability to gain insight into a situation by way of an occultic standardized process."
},
{
name: "Dowsing",
detail: "The ability to locate water, sometimes using a tool called a dowsing rod."
},
{
name: "Duplication (physical)",
detail: "Ability to create physical duplicates of oneself."
},
{
name: "Duplication (temporal)",
detail: "Ability to bring past and future versions of oneself back to the present."
},
{
name: "Earth and stone manipulation",
detail: "Ability to control earth; sand, stone, rock, lava, dirt, or other minerals"
},
{
name: "Elasticity",
detail: "Ability to stretch, deform, expand or contract one's body into any form imaginable"
},
{
name: "Electric manipulation",
detail: "Ability to control, generate or absorb electricity and electric phenomena"
},
{
name: "Empathy",
detail: "Ability to read or sense the emotions or control the emotions or feelings of others"
},
{
name: "Energy blasts",
detail: "Ability to expel various forms of energy from the body"
},
{
name: "Energy conversion",
detail: "Ability to absorb one form of energy and convert it into another form of energy"
},
{
name: "Energy medicine",
detail: "The ability to heal with one's own empathic etheric, astral, mental or spiritual energy."
},
{
name: "Essokinesis",
detail: "Ability to create, alter, or even destroy reality and the laws it is bound by with the power of the mind."
},
{
name: "Fire and heat manipulation",
detail: "Ability to control the kinetic energy of atoms to generate, control or absorb fire"
},
{
name: "Firebreathing",
detail: "Ability to generate gases from the body and exhale fire from the mouth."
},
{
name: "Force field generation",
detail: "Ability to project powerful fields of manipulated energy"
},
{
name: "Freeze vision",
detail: "Ability to freeze objects and other individuals with one's gaze"
},
{
name: "Gravity manipulation",
detail: "Ability to manipulate or generate gravitons, or other types of gravitational interactions"
},
{
name: "Heat vision",
detail: "Ability to burn objects and other individuals with one's gaze"
},
{
name: "Hydrokinesis",
detail: "Ability to control, generate or absorb water and moisture."
},
{
name: "Innate capability",
detail: "Ability to know or understand something without the need of studying or previous experience."
},
{
name: "Inorganic",
detail: "Ability to transform completely into an inorganic substance while retaining organic properties"
},
{
name: "Intangibility or phasing",
detail: "Ability to quantum tunnel through solid matter without harm[176]"
},
{
name: "Invisibility",
detail: "Ability to render the user unseen to the naked eye or other forms of perception."
},
{
name: "Invulnerability",
detail: "Ability to be immune to one or more forms of physical, mental, and spiritual damage and influence."
},
{
name: "Levitation",
detail: "The ability to undergo bodily uplift or fly by mystical means."
},
{
name: "Light manipulation",
detail: "Ability to control, generate or absorb light particles"
},
{
name: "Liquification",
detail: "Ability to turn partially or completely into a liquid"
},
{
name: "Magnetism manipulation",
detail: "Ability to control or generate magnetic fields"
},
{
name: "Mass manipulation",
detail: "Ability to increase or decrease mass in an object"
},
{
name: "Matter ingestion",
detail: "Ability to consume any sort of matter without any ill effects on the user."
},
{
name: "Memory manipulation",
detail: "Ability to erase or enhance the memories of another"
},
{
name: "Mind control",
detail: "The ability to alter the perceptions of others, and general ability to control the actions of others with the mind"
},
{
name: "Molecular manipulation",
detail: "Ability to mentally manipulate the molecules of objects or one's self on a molecular level"
},
{
name: "Night vision",
detail: "The ability to see clearly in total darkness"
},
{
name: "Omni-linguism",
detail: "Ability to understand any form of language, a natural polyglot. This can be accomplished in various ways."
},
{
name: "Omnipresence",
detail: "Ability to be present anywhere and everywhere simultaneously"
},
{
name: "Omniscience",
detail: "Ability to know anything and everything"
},
{
name: "Pheromone manipulation",
detail: "Ability to generate and control pheromones which may have various effects."
},
{
name: "Plant manipulation",
detail: "Ability to create, control, manipulate or animate plant life"
},
{
name: "Poison generation",
detail: "Ability to assault others with one or more varieties of toxins, with widely disparate effects."
},
{
name: "Possession",
detail: "Ability to take control and inhabit the body of an individual"
},
{
name: "Power augmentation",
detail: "Ability to enhance or weaken the powers of others."
},
{
name: "Power bestowal",
detail: "Ability to bestow powers or jump-start latent powers."
},
{
name: "Power mimicry or absorption",
detail: "Ability to copy or absorb another's powers or skills."
},
{
name: "Power negation",
detail: "Ability to cancel the superpowers of others."
},
{
name: "Power sensing",
detail: "Ability to sense or recognize superhuman powers."
},
{
name: "Prehensile/animated hair",
detail: "Ability to animate and lengthen one's hair."
},
{
name: "Probability manipulation",
detail: "Ability to alter probability, causing unlikely things to happen, or likely things not to happen"
},
{
name: "Prophecy",
detail: "The ability to predict what will happen in the future."
},
{
name: "Psychic weapons",
detail: "Ability to create a weapon of psychic energy that can harm mentally and not physically"
},
{
name: "Psychokinesis",
detail: "The ability to manipulate objects by way of extrasensory perception."
},
{
name: "Pyrokinesis",
detail: "The ability to manipulate fire."
},
{
name: "Radiation manipulation",
detail: "Ability to generate, manipulate or have immunity to toxic radiation"
},
{
name: "Reality warping",
detail: "Ability to change or manipulate reality itself"
},
{
name: "Resurrection",
detail: "Ability to come back to life after being killed as well, or to bring others back to life"
},
{
name: "Retrocognition",
detail: "The ability to perceive past events."
},
{
name: "Scrying",
detail: "The ability to look into a suitable medium with a view to detect significant information."
},
{
name: "Self-detonation or explosion and reformation",
detail: "Ability to explode one's body mass and reform."
},
{
name: "Sonic scream",
detail: "Ability to generate vocal sounds of a higher amplitude than a normal human."
},
{
name: "Sound manipulation",
detail: "Ability to manipulate sound"
},
{
name: "Spiritual mediumship",
detail: "Ability to see and communicate with the dead"
},
{
name: "Sublimation",
detail: "Ability to transform into a gaseous, mist, or fog-like form"
},
{
name: "Substance mimicry",
detail: "Ability to transform into any substance touched"
},
{
name: "Superhuman longevity",
detail: "Ability to live longer than a normal human."
},
{
name: "Superhuman mentality",
detail: "Ability to have intelligence quotient far above that of a genius level."
},
{
name: "Superhuman senses",
detail: "Ability to see, smell, taste, feel or hear more than a normal human."
},
{
name: "Superhuman strength",
detail: "Ability to have a level of strength much higher than normally possible given their proportions."
},
{
name: "Superhuman tracking",
detail: "Ability to track an individual or object through supernatural means; sometimes referred to as pathfinding"
},
{
name: "Telekinesis",
detail: "Ability to manipulate and control objects with the mind, often in ways not visible to the naked eye"
},
{
name: "Telepathy",
detail: "Ability to read the thoughts of, or to mentally communicate with others"
},
{
name: "Teleportation",
detail: "Ability to move from one place to another without occupying the space in between"
},
{
name: "Telescopic vision",
detail: "Ability to magnify and extend one's vision to various levels"
},
{
name: "Telesthesia",
detail: "The ability to see a distant and unseen target using extrasensory perception."
},
{
name: "Thoughtography",
detail: "The ability to 'burn' images from one's mind onto surfaces such as photographic film by psychic means."
},
{
name: "Time manipulation",
detail: "Ability to affect the flow of time by slowing, accelerating, reversing, or stopping it"
},
{
name: "Time travel",
detail: "Ability to travel back or forth through time"
},
{
name: "Vision-based powers",
detail: "Abilities that are based on one's eyes or ability to see."
},
{
name: "Wallcrawling",
detail: "Ability to adhere to solid surfaces, including walls and ceilings"
},
{
name: "X-ray vision",
detail: "Ability to see through solid matter"
}
]
export default class PowersList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            SuperPowerData: SuperPowerList,
        };
    }
    
    SuperPowerContainer() {
        return this.state.SuperPowerData.map(power => {
               return ( <div key= {power.name}>
                    <Power
                    name={power.name}
                    detail={power.detail}
                    />
                </div>
               )
            });
}
    render() {
        return (
            <div>
                <div className="PowersPageTitle">
                    <h1>Super powers</h1>
                </div>
                {this.SuperPowerContainer()}
            </div>
        )
    }
}
