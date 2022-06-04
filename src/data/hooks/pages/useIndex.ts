import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { Pet } from "../../@types/Pet";
import { ApiService } from "../../services/ApiService";

export const useIndex = () => {
    useEffect(() => {
        ApiService.get("/pets/")
            .then((response) => {
                setPets(response.data);
            })
    }, []);
    const [pets, setPets] = useState<Pet[]>([]);
    const [pet, setPet] = useState<Pet | null>(null);
    const [email, setEmail] = useState<string | null>(null);
    const [value, setValue] = useState<string | null>(null);
    const [message, setMessage] = useState<string | null>(null);
    function dadosPreenchidos() {
        return email?.length && value?.length
    }
    function limparFormulario() {
        setValue(null);
        setEmail(null);
    }
    function adotar() {
        if (pet) {
            if (dadosPreenchidos()) {
                ApiService.post('/adocoes/', {
                    pet_id: pet.id,
                    email,
                    value
                }).then(() => {
                    setMessage(`${pet.name} adotado. Parabéns!`);
                    limparFormulario();
                }).catch((error: AxiosError<any, any>) => {
                    setMessage(error.response?.data.message);
                }).finally(() => setPet(null))
            }
        }
    };

    return { pets, pet, setPet, email, setEmail, value, setValue, message, setMessage, adotar }
}