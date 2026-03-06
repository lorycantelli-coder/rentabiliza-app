"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { IconInfoCircle } from "@tabler/icons-react"
import { useState } from "react"

export default function FormPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-2xl space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Formulário de Exemplo</h1>
          <p className="text-muted-foreground">Demonstração de todos os componentes de formulário</p>
        </div>

        {/* Success Alert */}
        {submitted && (
          <Alert>
            <IconInfoCircle className="h-4 w-4" />
            <AlertTitle>Sucesso!</AlertTitle>
            <AlertDescription>
              Formulário enviado com sucesso!
            </AlertDescription>
          </Alert>
        )}

        {/* Form Card */}
        <form onSubmit={handleSubmit}>
          <Card>
            <CardHeader>
              <CardTitle>Informações Pessoais</CardTitle>
              <CardDescription>
                Preencha o formulário abaixo com suas informações
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Text Inputs */}
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Nome</Label>
                  <Input id="firstName" placeholder="João" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Sobrenome</Label>
                  <Input id="lastName" placeholder="Silva" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="joao@exemplo.com" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Telefone</Label>
                <Input id="phone" type="tel" placeholder="(11) 99999-9999" />
              </div>

              {/* Select */}
              <div className="space-y-2">
                <Label htmlFor="country">País</Label>
                <Select>
                  <SelectTrigger id="country">
                    <SelectValue placeholder="Selecione um país" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="br">Brasil</SelectItem>
                      <SelectItem value="us">Estados Unidos</SelectItem>
                      <SelectItem value="uk">Reino Unido</SelectItem>
                      <SelectItem value="pt">Portugal</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              {/* Textarea */}
              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  placeholder="Digite sua mensagem aqui..."
                  rows={4}
                />
              </div>

              {/* Radio Group */}
              <div className="space-y-2">
                <Label>Tipo de Conta</Label>
                <RadioGroup defaultValue="personal">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="personal" id="personal" />
                    <Label htmlFor="personal" className="font-normal">Pessoal</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="business" id="business" />
                    <Label htmlFor="business" className="font-normal">Empresarial</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Checkboxes */}
              <div className="space-y-4">
                <Label>Interesses</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="tech" />
                    <Label htmlFor="tech" className="font-normal">Tecnologia</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="design" />
                    <Label htmlFor="design" className="font-normal">Design</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="business" />
                    <Label htmlFor="business" className="font-normal">Negócios</Label>
                  </div>
                </div>
              </div>

              {/* Switch */}
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <Label htmlFor="notifications">Notificações</Label>
                  <p className="text-sm text-muted-foreground">
                    Receber emails sobre atualizações
                  </p>
                </div>
                <Switch id="notifications" />
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" required />
                <Label htmlFor="terms" className="font-normal text-sm">
                  Aceito os termos e condições
                </Label>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" type="button">Cancelar</Button>
              <Button type="submit">Enviar</Button>
            </CardFooter>
          </Card>
        </form>

        {/* Additional Info Card */}
        <Card>
          <CardHeader>
            <CardTitle>Informações Adicionais</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Este é um exemplo de formulário usando todos os componentes principais do shadcn/ui.
              Você pode combinar esses componentes para criar formulários complexos e interativos.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
