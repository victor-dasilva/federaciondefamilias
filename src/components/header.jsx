import { TravelerEffect, MosaicGroundEffect, OceanEffect,
  RainEffect, SeaWaveEffect, SnowFallEffect, SnowFallSlowEffect,
  SpacingEffect, CloudWaveEffect 
} from 'react-background-animation'

export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <TravelerEffect />
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1 id='h1-header'>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <h3>{props.data ? props.data.paragraph1 : 'Loading'}</h3>
                <p>{props.data ? props.data.paragraph2 : 'Loading'}</p>
                <a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Ver más
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
