import { Container, Grid, Typography } from '@mui/material';

const GallerySection = () => {
  return (
    <section style={{ background: "linear-gradient(to right, #53c4f7, #99dfff )", }}>
      <Container maxWidth="lg" style={{ padding: '4rem 0' }}>
        <Grid container spacing={2}>
          <Grid item lg={3} md={3} xs={12}>
            <Typography
              variant="h4"
              style={{ fontWeight: 'bold', color: 'white' }}
            >
              Colombia es Sostenibilidad
            </Typography>
          </Grid>
          <Grid item lg={9} md={9} xs={12}>
            <Typography
              variant="body1"
              style={{ color: 'white', paddingLeft: '24px' }}
            >
              Estos son algunos de los sitios que puedes conocer con nostros y contribuir al turismo ecologico y sostenible
            </Typography>
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <img
                  src="https://img.freepik.com/foto-gratis/paisaje-palmeras-primer-plano-montanas-al-fondo_188544-44172.jpg?w=1380&t=st=1699390488~exp=1699391088~hmac=f49726c23770dcd9a8f11ec0267ca3d4d55913527a8abbfda82e8c45707f1fcc"
                  alt="gallery"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  src="https://img.freepik.com/foto-gratis/vibrante-vida-ciudad-gente-linternas-nocturnas-generadas-ia_188544-53554.jpg?w=1380&t=st=1699390507~exp=1699391107~hmac=35da8886095774e6e08eded36b1cb3d15cb9354b80e3c2fa08bac7c1211e65a4"
                  alt="gallery"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <img
                  src="https://img.freepik.com/foto-gratis/noche-paisaje-urbano-al-aire-libre-arquitectura-iluminada-ia-generativa_188544-11254.jpg?w=826&t=st=1699390561~exp=1699391161~hmac=bdbe8a6ef08358575ea5f974f4da2a61ab5d8d63bb368f2fad4b510b150569a7"
                  alt="gallery"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <img
                  src="https://img.freepik.com/foto-gratis/plantaciones-te-verde-cima-colina-provincia-chiang-rai-tailandia-vista-paisaje-naturaleza_1150-21735.jpg?w=1380&t=st=1699390871~exp=1699391471~hmac=39d1bc4c9c584dae67c56ccd12b9bec180837236e673da3cab6d97ff12a4107a"
                  alt="gallery"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  src="https://img.freepik.com/foto-gratis/puesta-sol-sobre-selva-tropical-escena-tranquila-belleza-natural-generada-ia_188544-61218.jpg?w=1380&t=st=1699390638~exp=1699391238~hmac=c3987335cf29144d632203937462c188cc932f4923b628cc457755ba9368a967"
                  alt="gallery"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  src="https://img.freepik.com/foto-gratis/flores-colores-vibrantes-adornan-antigua-arquitectura-caribena-generada-ia_188544-44240.jpg?w=1380&t=st=1699390710~exp=1699391310~hmac=5b50e7814a2c18981e992db33a4d6f4f452cea190d8e73b5901060912d0f2fbf"
                  alt="gallery"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default GallerySection;
