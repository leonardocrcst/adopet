import type { NextPage } from "next";
import { List } from "../ui/components/List/List";
import { Title } from "../ui/components/title/Title";
import { Dialog, DialogTitle, TextField, Grid, DialogActions, Button, Snackbar } from "@mui/material";
import { useIndex } from "../data/hooks/pages/useIndex";

const Home: NextPage = () => {
  const { pets, pet, setPet, email, setEmail, value, setValue, message, setMessage, adotar } = useIndex();
  return (
    <>
      <Title
        title=""
        subtitle={
          <span>
            Com um pequeno valor mensal você pode{" "}
            <strong>adotar um pet virtualmente</strong>
          </span>
        }
      />
      <List list={pets} onSelect={(_pet) => setPet(_pet)} />
      <Dialog
        open={pet !== null}
        fullWidth
        PaperProps={{ sx: { p: 2 } }}
        onClose={() => setPet(null)}
      >
        <DialogTitle>Falta pouco para adotar o seu Pet</DialogTitle>
        <Grid container spacing="20">
          <Grid item xs={12}>
            <TextField label="E-mail" fullWidth type={'email'} value={email} onChange={(e) => setEmail(e.target.value)} />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Valor mensal" fullWidth type={'number'} value={value} onChange={(e) => setValue(e.target.value)} />
          </Grid>
        </Grid>
        <DialogActions sx={{ pt: 3 }}>
          <Button variant="text" onClick={() => setPet(null)}>Cancelar</Button>
          <Button variant="contained" onClick={() => adotar()}>Confirmar adoção</Button>
        </DialogActions>
      </Dialog>
      <Snackbar open={message !== null} message={message} onClose={() => { setMessage(null) }} autoHideDuration={2000} />
    </>
  );
};

export default Home;
