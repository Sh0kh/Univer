import { useTranslation } from "react-i18next";
import MiniHeader from "../Components/MiniHeader";
import StaffCards from "../Components/Rahbariyat/StaffCards";

export default function Rahbariyat() {

    const { t } = useTranslation()

    return (
        <div>
            <MiniHeader title={t('Rahbariyat')} minititle={t('Rahbariyat')} />
            <StaffCards />
        </div>
    )
}