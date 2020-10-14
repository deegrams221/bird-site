import React from 'react';
import ContactForm from './ContactForm';

export default function Content() {
  return (
    <div className='content'>
      <p>
        <b>
          Small hobby breeder of Cockatiels, Green-Cheeked Conures, Bourke's
          Parakeets, and Budgies
        </b>
      </p>
      <img
        src={require('../../images/bird_room.jpg')}
        alt='K & B Aviary Bird Room'
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua
      </p>
      <div className='container'>
        <img
          src={require('../../images/logo1.jpg')}
          alt='K & B Aviary Logo'
          width='200px'
        />
        <div className='subcontainer'>
          <div className='content-one'>
            <h2>COCKATIELS</h2>
            <h3>
              Considered the most popular of the parrot family, they are
              outgoing and they love to climb and play!
            </h3>
          </div>
          <div className='content-two'>
            <h2>CONURES</h2>
            <h3>
              Great personalities and can be outgoing and comical, but they can
              also be a little shy.
            </h3>
          </div>
          <div className='content-three'>
            <h2>BUDGIES</h2>
            <h3>
              Known to have a big personality! They are small but full of
              character.
            </h3>
          </div>
          <div className='content-four'>
            <h2>PARAKEETS</h2>
            <h3>
              A great introductory bird for new bird owners! They have a calm
              demeanor.
            </h3>
          </div>
          <div className='buttons'>
            <div className='contact-button'>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <div className='container-two'>
        <div className='one'>
          <img
            src={require('../../images/bourke_parakeets.png')}
            alt='Six Bourke parakeets in a cage'
            width='345px'
            height='168px'
          />
        </div>
        <div className='two'>
          <p>
            <b>Bourke's Parakeets</b> are a great introductory bird for new bird
            owners; they have a calm demeanor and they keep themselves
            entertained. They are ideal apartment living because they are quiet
            and they are excellent partners for finches and cockatiels as well
            as other Bourke's parakeets. Keep gentle Bourke's parakeets away
            from larger, aggressive birds.
          </p>
        </div>
        <div className='three'>
          <p>
            <b>Opaline Budgies</b> are the most common variant of budgie.
            Budgies are often referred to as the "most popular bird" becasue
            there are more budgies in the world than any other type of pet bird.
            Budgies are known to have a big personality too; they’re small but
            full of character, cramming all the charisma of a parrot into a
            package not much bigger than a canary.
          </p>
        </div>
        <div className='four'>
          <img
            src={require('../../images/budgies.png')}
            alt='One Opaline Budgie and one Crested Budgie sitting on a perch'
            width='345px'
            height='168px'
          />
        </div>

        <div className='five'>
          <img
            src={require('../../images/conures.jpg')}
            alt='Group of four Green Cheeked Conures resting on a perch'
            width='340px'
            height='168px'
          />
        </div>
        <div className='six'>
          <p>
            <b>Green Cheeked Conures</b> have great personalities and can be
            outgoing and comical, but they can also be a little shy. They love
            to play and will enjoy a good rotation of toys and a spacious cage
            to run around. Green Cheeked Conures are also one of the smallest
            conures; averaging around 10 inches long.
          </p>
        </div>
        <div className='seven'>
          <p>
            <b>Cinnamon Cockatiels</b> are unique in that they are a strain
            developed by breeders and are not found in the wild. Grey cockatiels
            are mostly what is seen in the wild and they are found over most of
            Australia. Cockatiels are part of the parrot family, and are
            considered the most popular of the parrot family. They are closely
            related to the Cockatoos too.
          </p>
        </div>
        <div className='eight'>
          <img
            src={require('../../images/cinnamon_cockatiel_full.jpg')}
            alt='Full grown Cinnamon Cockatiel'
            width='345px'
            height='168px'
          />
        </div>
      </div>
      <div className='container-three'>
        <h2>Video Title</h2>
        <iframe
          className='iframe'
          title='video'
          width='575'
          height='315'
          src='https://www.youtube.com/embed/tgbNymZ7vqY'
        />
        <p>
          Ad pariatur dolor occaecat cupidatat amet eiusmod laborum nostrud
          reprehenderit est. Nulla esse consectetur velit incididunt laborum sit
          incididunt dolore minim culpa. Cillum fugiat officia elit dolor
          exercitation minim officia id proident enim elit nostrud elit culpa.
          Incididunt duis dolor velit do deserunt voluptate do fugiat ullamco.
        </p>
        <p>
          Laborum laborum Lorem adipisicing amet voluptate magna adipisicing
          proident aliquip deserunt sint voluptate duis. Culpa fugiat occaecat
          esse voluptate. Nostrud minim tempor amet aliquip qui esse ad aliquip.
          Laborum adipisicing sint anim enim excepteur irure pariatur in et.
          Culpa ex aliqua officia esse aute. Sunt culpa sint aliqua dolore
          consectetur Lorem nisi ullamco mollit eiusmod et ea. Irure veniam
          velit esse velit excepteur amet et id ad irure tempor enim.
        </p>
        <p>
          Nisi tempor amet commodo in id ea elit ullamco occaecat laborum
          occaecat nisi anim. Deserunt laborum culpa culpa nisi quis adipisicing
          Lorem mollit minim. Nulla laborum deserunt pariatur nostrud. Tempor
          proident aute laborum fugiat. Ex officia aliquip qui aute sit dolor
          excepteur sit do veniam.
        </p>
      </div>
    </div>
  );
}
