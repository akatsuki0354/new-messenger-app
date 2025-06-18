export default async function Page({ params, }: { params: Promise<{ profileId: string }> }) {
    const { profileId } = await params
    return (
        <div>

        </div>
    )
}